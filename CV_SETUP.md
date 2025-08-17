# CV Setup Instructions

## How to Add Your CV to the Portfolio

### Step 1: Prepare Your CV
1. **Convert your CV to PNG format** (recommended for best quality)
2. **Name it exactly**: `cv.png`
3. **Recommended size**: A4 format or similar (around 800x1100 pixels)

### Step 2: Add to Project
1. **Place the file** in the `public` directory
2. **File path should be**: `public/cv.png`

### Step 3: Test
1. **Run the project**: `npm run dev`
2. **Click "View My CV"** in the navigation
3. **Your CV should display** with download options

## Features

### ✅ **Automatic Display**
- CV loads automatically when modal opens
- No upload required from users

### ✅ **Download Function**
- Users can download your CV as PNG
- File downloads as "Farhad_Ahmad_CV.png"

### ✅ **View Original**
- Opens CV in new tab for full-size viewing
- Better for detailed reading

### ✅ **Fallback System**
- If CV file is missing, shows upload option
- Graceful error handling

## File Structure
```
portfolio/
├── public/
│   └── cv.png          ← Your CV goes here
├── components/
│   ├── CVModal.tsx     ← CV display component
│   └── Navigation.tsx  ← CV button
└── ...
```

## Supported Formats
- **PNG** (recommended)
- **JPG/JPEG**
- **PDF** (will show as image)

## Tips
- Use PNG for best quality and transparency
- Keep file size under 5MB for fast loading
- Test on different screen sizes
- Ensure text is readable at different zoom levels
