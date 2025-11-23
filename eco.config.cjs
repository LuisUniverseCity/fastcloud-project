module.exports =  {
    apps: [
        {
            name: 'example.com', // Enter the domain or subdomain
            script: './server/app.js', // Route to the app - Don't change
            env: {
                PORT: 3801 // Select a port
            }
        }
    ]
}