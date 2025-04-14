# Plus1 Platform Content Management Guide

This guide provides detailed instructions for managing course content, UI elements, and interactive features in the Plus1 learning platform.

## Table of Contents
1. [Course Data Management](#course-data-management)
2. [Course Display Components](#course-display-components)
3. [Interactive Features](#interactive-features)
4. [UI Customization](#ui-customization)
5. [Best Practices & Limitations](#best-practices--limitations)

## Course Data Management

### Course Data Structure
The core course data is managed in `src/lib/example-data.ts`. Each course follows this structure:

```typescript
interface ExampleCourse {
  id: string;          // Unique identifier
  title: string;       // Course title
  description: string; // Course description
  image: string;       // Thumbnail URL
  lessons: ExampleLesson[];
}

interface ExampleLesson {
  id: string;          // Unique identifier
  title: string;       // Lesson title
  description: string; // Lesson description
  contentType: 'video' | 'pdf';
  contentUrl: string;  // Video embed URL or PDF URL
  duration: number;    // Duration in minutes
}
```

### Adding or Modifying Courses
1. Navigate to `src/lib/example-data.ts`
2. Locate the `EXAMPLE_COURSES` array
3. Add or modify course objects:

```typescript
export const EXAMPLE_COURSES: ExampleCourse[] = [
  {
    id: 'unique-course-id',
    title: 'Course Title',
    description: 'Course Description',
    image: 'https://your-image-url.jpg',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Lesson Title',
        description: 'Lesson Description',
        contentType: 'video',
        contentUrl: 'https://www.youtube.com/embed/VIDEO_ID',
        duration: 45
      }
    ]
  }
];
```

## Course Display Components

### Course Preview Cards
Located in `src/components/courses/CoursePreview.tsx`, these cards display course information with:
- Thumbnail image with hover effects
- Progress indicator
- Level badge
- Duration
- Title and description
- Interactive hover animations

```typescript
interface CoursePreviewProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  progress?: number;
  level: "beginner" | "intermediate" | "advanced";
  contentType?: 'video' | 'pdf';
  contentUrl?: string;
}
```

### Course Modal
Located in `src/components/courses/CourseModal.tsx`, provides an immersive learning experience with:
- Video/PDF content viewer
- Notes taking system
- Knowledge check quizzes
- Progress tracking
- Dark mode support

## Interactive Features

### Video Player
- Supports YouTube embedded videos
- Progress tracking
- Completion callbacks
- Responsive design

### PDF Viewer
- Integrated PDF document viewer
- Progress tracking
- Completion tracking
- Responsive layout

### Notes System
- Real-time note-taking
- Auto-save functionality
- Rich text support
- Dark mode compatible

### Knowledge Check System
The quiz system includes:
- Multiple choice questions
- Immediate feedback
- Score tracking
- Retry functionality

## UI Customization

### Theme Colors
Course level indicators use the following color schemes:

```typescript
const levelColors = {
  beginner: "text-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950",
  intermediate: "text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-950",
  advanced: "text-purple-500 dark:text-purple-400 bg-purple-50 dark:bg-purple-950"
};

const levelGradients = {
  beginner: "from-emerald-500 to-teal-500",
  intermediate: "from-blue-500 to-cyan-500",
  advanced: "from-purple-500 to-pink-500"
};
```

### Modal Styling
The course modal uses a modern, responsive design:

```typescript
<DialogContent className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[160vh] h-[85vh] min-w-[1200px] max-w-[98vw] bg-background/70 backdrop-blur-md rounded-lg border shadow-lg grid grid-rows-[auto_1fr] overflow-hidden text-white">
```

## Best Practices & Limitations

### File Structure
Key files and their purposes:
- `src/lib/example-data.ts`: Course data and structure
- `src/app/courses/[id]/page.tsx`: Course viewer page
- `src/components/courses/CoursePreview.tsx`: Course card component
- `src/components/courses/CourseModal.tsx`: Interactive course modal
- `src/components/course/VideoPlayer.tsx`: Video player component
- `src/components/course/PDFViewer.tsx`: PDF viewer component

### Content Guidelines
1. **Videos**
   - Use YouTube embed URLs (https://www.youtube.com/embed/VIDEO_ID)
   - Videos must be public or unlisted
   - Recommended length: 5-60 minutes

2. **Images**
   - Use HTTPS URLs
   - Recommended aspect ratio: 16:9
   - Optimal resolution: 1280x720 or higher
   - Format: JPG or PNG
   - Max file size: 2MB

3. **PDFs**
   - Must be hosted on a reliable CDN
   - Recommended max size: 10MB
   - Should be mobile-responsive

### Technical Limitations
1. Video Content:
   - YouTube videos only
   - Must be publicly accessible or unlisted
   - Embed URL format required

2. Images:
   - HTTPS required
   - CDN hosting recommended
   - Specific aspect ratios required

3. Course Structure:
   - Unique IDs required for all courses and lessons
   - Maximum recommended lessons per course: 50
   - Maximum recommended course description length: 200 characters

### Performance Considerations
1. Image Optimization:
   - Use appropriate image sizes
   - Implement lazy loading
   - Consider using next/image for optimization

2. Video Loading:
   - Implement lazy loading for video embeds
   - Consider bandwidth usage
   - Provide fallback content

3. PDF Handling:
   - Implement progressive loading
   - Consider mobile bandwidth
   - Provide download options

For technical support or additional customization needs, refer to the component files directly or consult the development team. 