Setup Instructions

Follow these steps to set up and run the project:

1. Clone the Repository


2. Create .env.local File

In the root directory, create a .env.local file and add the following environment variables:

API_KEY=YOUR_TDMI_API_KEY
DATABASE_URL=BASE_URL
NEXTAUTH_SECRET=""
NEXTAUTH_URL=""

Note: Ensure that .env.local is added to .gitignore to keep secrets safe.

3. Install Dependencies

Run the following command to install the necessary dependencies:

npm install

4. Start the Development Server

Run the project in development mode:

npm run dev

The application should now be running on http://localhost:3000/.

Additional Notes

Make sure you have Node.js installed.

Restart the server after making changes to environment variables.
