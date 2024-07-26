# Green Hills Academy CMS

## Project Overview

Green Hills Academy CMS is a content management system designed for Green Hills Academy, an International Baccalaureate (IB) World School. Developed using Next.js 14, this CMS helps manage various types of content related to the academy's educational programs. It efficiently handles content display, data fetching, and provides a dynamic and responsive user experience.

## Features

- **Dynamic Data Fetching**: Fetches and displays data from a configurable API endpoint using Axios.
- **Content Sorting**: Sorts content based on creation date with special prioritization for "header_image".
- **Loading State**: Shows a splash screen while data is being loaded.
- **Conditional Rendering**: Displays additional components (e.g., social media links, subscription input) based on the `landing` prop.
- **Responsive Design**: Ensures content is displayed effectively across various devices and screen sizes.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/greenhills-academy-cms.git
2. **Navigate to the Project Directory:**:
    ```bash
   git clone https://github.com/yourusername/greenhills-academy-cms.git
3. **Install Dependencies:**:
    ```bash
   npm install

or if you prefer Yarn:
    ```bash
    yarn dev

4. **Start the development server:**:
    ```bash
   npm run dev

5. **Create a environment variable**:
    Create a `.env` file in the root of the project directory and add your environment variables. 
    Example:

    ```bash
   NEXT_PUBLIC_API_ENDPOINT=https://api.example.com/data

6. **Run the project:**:
    Open your browser and go to `http://localhost:3000` to view the application.


## Usage

- Configure the endpoint prop in the GetData component to point to your API providing the necessary content data.
- Adjust the landing prop to control the display of additional content like social media links and subscription inputs.

## Project Structure

- `components/:` Contains reusable components such as `LayoutTemplates`, `SplashScreen`, `SocialMedia`, and `SubscribeInput`.
- `pages/:` Includes pages for rendering content and handling routes.
- `styles/:` Contains global and component-specific CSS styles.
- types/: Contains TypeScript interfaces for form data and props.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please reach out to us at [yvonmu2@gmail.com](mailto:yvonmu2@gmail.com) /or [Call Us](tel:+250788701902)


