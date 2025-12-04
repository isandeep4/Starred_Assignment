import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ pageNumber: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
    const { pageNumber } = await context.params;
    const baseUrl = process.env.NEXT_PUBLIC_JOBS_API_BASE_URL;
    const endpoint = process.env.NEXT_PUBLIC_JOBS_API_JOBS_ENDPOINT;
    const url = `${baseUrl}${endpoint}?page=${pageNumber}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    const data = await response.json();

    const jobs = data.data.map((job: any) => ({
      id: job.id,
      title: job.job_title,
      company: job.company,
      description: job.description,
    }));

    return NextResponse.json({
      success: true,
      data: jobs,
      total: jobs.length,
      pagination: data.pagination.currentPage,
      firstPage: data.pagination.firstPage,
        lastPage: data.pagination.lastPage
    });

  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
