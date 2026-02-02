#!/bin/bash

# Product Viewer 360 - Image Setup Script
# This script copies and renames the Vita 1 reference images to the public folder

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
REFERENCE_DIR="$PROJECT_ROOT/reference docs"
PUBLIC_DIR="$PROJECT_ROOT/public"

echo "🎨 Setting up Product Viewer 360 images..."
echo ""

# Create public directory if it doesn't exist
if [ ! -d "$PUBLIC_DIR" ]; then
  echo "📁 Creating public directory..."
  mkdir -p "$PUBLIC_DIR"
fi

# Check if reference images exist
if [ ! -d "$REFERENCE_DIR" ]; then
  echo "❌ Error: 'reference docs' folder not found!"
  echo "   Expected location: $REFERENCE_DIR"
  exit 1
fi

# Copy and rename images
echo "📋 Copying images..."

if [ -f "$REFERENCE_DIR/vita 1 front.png" ]; then
  cp "$REFERENCE_DIR/vita 1 front.png" "$PUBLIC_DIR/vita-1-front.png"
  echo "   ✓ vita-1-front.png"
else
  echo "   ⚠️  Warning: 'vita 1 front.png' not found"
fi

if [ -f "$REFERENCE_DIR/vita 1 right.png" ]; then
  cp "$REFERENCE_DIR/vita 1 right.png" "$PUBLIC_DIR/vita-1-right.png"
  echo "   ✓ vita-1-right.png"
else
  echo "   ⚠️  Warning: 'vita 1 right.png' not found"
fi

if [ -f "$REFERENCE_DIR/vita 1 back.png" ]; then
  cp "$REFERENCE_DIR/vita 1 back.png" "$PUBLIC_DIR/vita-1-back.png"
  echo "   ✓ vita-1-back.png"
else
  echo "   ⚠️  Warning: 'vita 1 back.png' not found"
fi

if [ -f "$REFERENCE_DIR/vita 1 left.png" ]; then
  cp "$REFERENCE_DIR/vita 1 left.png" "$PUBLIC_DIR/vita-1-left.png"
  echo "   ✓ vita-1-left.png"
else
  echo "   ⚠️  Warning: 'vita 1 left.png' not found"
fi

echo ""
echo "✨ Image setup complete!"
echo ""
echo "📊 Image file sizes:"
ls -lh "$PUBLIC_DIR"/vita-1-*.png 2>/dev/null | awk '{print "   " $9 ": " $5}'

echo ""
echo "💡 Next steps:"
echo "   1. Run 'npm run dev' to start the development server"
echo "   2. Navigate to http://localhost:3000/en/vita-1"
echo "   3. Test the 360 viewer component"
echo ""
echo "⚙️  Optional optimization:"
echo "   To reduce file sizes, you can use ImageMagick:"
echo "   brew install imagemagick (if not installed)"
echo "   mogrify -resize '1200x1200>' -quality 85 public/vita-1-*.png"
echo ""
