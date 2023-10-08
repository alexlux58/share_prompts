# Share Prompts

Share Prompts is a platform where users can create and share writing prompts to inspire creativity in others. Users can also respond to prompts with their own pieces of writing.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alexlux58/share_prompts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd share_prompts
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and fill in the necessary environment variables as per `.env.example`.

- GOOGLE_ID
- GOOGLE_CLIENT_SECRET
- MONGODB_URI
- NEXTAUTH_URL
- NEXTAUTH_URL_INTERNAL
- NEXTAUTH_SECRET

5. Start the development server:
   ```bash
   npm run dev
   ```

# TODO

[] Implement Search
\*\* Implemented in the Feed component

- Search by prompt
- Search by tag
- Search by username

[] Implement Click on tag
[] Implement View other profiles
