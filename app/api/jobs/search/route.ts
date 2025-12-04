import { NextRequest, NextResponse } from 'next/server';

interface ApiJob {
  id: number;
  job_title: string;
  company: string;
  description: string;
}

interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  description: string;
  requirements?: string;
}

interface ApiResponse {
  pagination: {
    currentPage: number;
    firstPage: number;
    lastPage: number;
  };
  data: ApiJob[];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { keyword } = body;

    if (!keyword || typeof keyword !== 'string') {
      return NextResponse.json(
        { error: 'Keyword is required and must be a string' },
        { status: 400 }
      );
    }
    const baseUrl = process.env.NEXT_PUBLIC_JOBS_API_BASE_URL;
    const recommendationsEndpoint = process.env.NEXT_PUBLIC_JOBS_API_RECOMMENDATIONS_ENDPOINT;
    const response = await fetch(`${baseUrl}${recommendationsEndpoint}`,
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ jobTitle: keyword }),
                        });
    if (!response.ok) {
        throw new Error('Failed to fetch search results');
    }
    const data = await response.json();
    console.log('Recommendation API response data:', data);
    const jobIds = data.jobIds;

    // Fetch full job details for each recommended job
    const jobs: Job[] = [];
    const endpoint = process.env.NEXT_PUBLIC_JOBS_API_JOBS_ENDPOINT;

    for (const id of jobIds) {
        const jobResponse = await fetch(`${baseUrl}${endpoint}/${id}`);
        if (jobResponse.ok) {
            const jobData = await jobResponse.json();
            // Transform the API response to match our Job interface
            const job = {
                id: jobData.id,
                title: jobData.job_title,
                company: jobData.company,
                description: jobData.description,
            };
            jobs.push(job);
        }
    }
    return NextResponse.json({
        success: true,
        data: jobs,
        total: jobs.length
    });

  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
