# MomCare Design Guidelines

## Design Approach: Reference-Based (Healthcare + Mobile-First)
Drawing inspiration from healthcare apps like Ovia Pregnancy and What to Expect, combined with the simplicity of WhatsApp for familiarity among rural users.

## Core Design Principles
- **Simplicity First**: Large, clear buttons and minimal text for users with limited tech experience
- **Cultural Sensitivity**: Warm, nurturing colors that resonate with maternal care
- **Accessibility**: High contrast, large touch targets, multi-language support
- **Trust & Safety**: Clean, medical-grade interface that builds confidence

## Color Palette

### Primary Colors
- **Primary**: 200 45% 55% (Soft teal - calming, medical)
- **Primary Dark**: 200 50% 35% (For dark mode and depth)

### Supporting Colors
- **Success**: 140 60% 45% (Vaccination completed, badges)
- **Warning**: 35 85% 55% (Overdue reminders)
- **Error**: 5 70% 50% (Missed appointments)
- **Background Light**: 200 20% 98%
- **Background Dark**: 200 15% 8%

### Accent Colors
- **Badge Gold**: 45 75% 65% (Achievement celebrations)
- **Gentle Pink**: 320 40% 85% (Maternal warmth accents)

## Typography
- **Primary Font**: Inter (Google Fonts) - excellent readability
- **Headings**: 600 weight, larger sizes (24px+)
- **Body**: 400 weight, minimum 16px for accessibility
- **Buttons**: 500 weight, 18px minimum

## Layout System
- **Spacing Units**: Tailwind 4, 6, 8, 12 (consistent, generous spacing)
- **Mobile-First**: All interactions optimized for thumb navigation
- **Grid**: Single column on mobile, two-column on tablet/desktop

## Component Library

### Navigation
- **Bottom Tab Bar**: Home, Profile, Reminders, Support
- **Large Touch Targets**: Minimum 48px height
- **Clear Icons**: Heroicons with text labels

### Cards & Panels
- **Reminder Cards**: Rounded corners (8px), subtle shadows
- **Vaccination Card**: Digital card design with checkmarks
- **Progress Indicators**: Large, visual progress bars and circles

### Buttons
- **Primary**: Solid teal background, white text
- **Secondary**: Outline style with teal border
- **Large CTAs**: Full-width on mobile, prominent sizing

### Forms
- **Simple Inputs**: Large text fields, clear labels
- **Date Pickers**: Visual calendar interface
- **Language Selector**: Flag icons + text

### Gamification Elements
- **Badges**: Colorful, celebratory icons
- **Streak Counter**: Large numbers with flame icon
- **Progress Rings**: Circular progress indicators

## Key Interface Sections

### Home Screen
- **Next Appointment Card**: Prominent, easy to read
- **Quick Actions**: Large buttons for common tasks
- **Progress Summary**: Visual indicators for vaccination status

### Reminder System
- **Color-Coded Alerts**: Green (upcoming), yellow (due today), red (overdue)
- **One-Tap Actions**: Confirm, reschedule, mark complete

### Dashboard (Health Officials)
- **Data Visualization**: Simple charts and statistics
- **Filter Controls**: Easy sorting and searching
- **Export Functions**: Clear download buttons

## Accessibility Features
- **High Contrast Mode**: Enhanced visibility options
- **Voice Support**: Text-to-speech for illiterate users
- **Large Text Options**: Scalable font sizes
- **Offline Indicators**: Clear connection status

## Multi-Language Considerations
- **RTL Support**: Flexible layouts for Arabic/Urdu
- **Font Selection**: Unicode fonts supporting local scripts
- **Cultural Icons**: Appropriate imagery for regional context

## Images
- **Maternal Care Illustrations**: Soft, inclusive illustrations of mothers and babies
- **Vaccination Icons**: Simple, recognizable medical symbols
- **Badge Graphics**: Celebratory achievement icons
- **No large hero images**: Focus on functionality over marketing visuals

## Animations
- **Minimal Usage**: Subtle transitions only
- **Badge Celebrations**: Small scale/fade animations for achievements
- **Loading States**: Simple progress indicators

This design approach prioritizes usability and cultural appropriateness while maintaining the medical credibility essential for healthcare applications.