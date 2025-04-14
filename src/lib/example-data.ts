interface ExampleLesson {
  id: string;
  title: string;
  description: string;
  contentType: 'video' | 'pdf';
  contentUrl: string;
  duration: number; // in minutes
}

interface ExampleCourse {
  id: string;
  title: string;
  description: string;
  image: string;
  lessons: ExampleLesson[];
  level?: "beginner" | "intermediate" | "advanced";
  duration?: string;
}

export const EXAMPLE_COURSES: ExampleCourse[] = [
  {
    id: 'music-production',
    title: 'Music Production Fundamentals',
    description: 'Learn the basics of music production, from setting up your DAW to mixing and mastering your first track.',
    image: '/course-thumbnails/music-production.jpg',
    level: 'beginner',
    duration: '8 weeks',
    lessons: [
      {
        id: 'daw-setup',
        title: 'Setting Up Your DAW',
        description: 'Learn how to configure your Digital Audio Workstation for optimal performance',
        contentType: 'video',
        contentUrl: 'https://www.youtube.com/embed/Hi72cCOPUQU',
        duration: 60
      }
    ]
  },
  {
    id: 'songwriting',
    title: 'Songwriting Essentials',
    description: 'Master the art of songwriting with practical exercises and professional techniques.',
    image: '/course-thumbnails/songwriting.jpg',
    level: 'intermediate',
    duration: '6 weeks',
    lessons: [
      {
        id: 'song-structure',
        title: 'Understanding Song Structure',
        description: 'Learn about different song structures and how to use them effectively',
        contentType: 'video',
        contentUrl: 'https://www.youtube.com/embed/NC1PcpFT604',
        duration: 45
      }
    ]
  },
  {
    id: 'mixing',
    title: 'Professional Mixing Techniques',
    description: 'Take your mixing skills to the next level with industry-standard practices and tools.',
    image: '/course-thumbnails/mixing.jpg',
    level: 'advanced',
    duration: '10 weeks',
    lessons: [
      {
        id: 'eq-basics',
        title: 'EQ Fundamentals',
        description: 'Master the basics of equalization in music production',
        contentType: 'video',
        contentUrl: 'https://www.youtube.com/embed/_gDR0Pu66Kw',
        duration: 30
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Music Marketing Mastery',
    description: 'Learn how to promote your music effectively and build your audience in the digital age.',
    image: '/course-thumbnails/marketing.jpg',
    level: 'intermediate',
    duration: '4 weeks',
    lessons: [
      {
        id: 'social-media',
        title: 'Social Media Strategy',
        description: 'Build an effective social media presence for your music',
        contentType: 'video',
        contentUrl: 'https://www.youtube.com/embed/Aq_VTI_cXuY',
        duration: 90
      }
    ]
  }
]; 