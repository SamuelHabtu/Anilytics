# Sql Server

`data source=Crush-PC;initial catalog=anilytics;User ID=dev;Password=Dev;trusted_connection=true;TrustServerCertificate=True`

# Scaffold

`dotnet ef dbcontext scaffold "Host=localhost;Username=postgres;Password=dev;Database=anilytics" Npgsql.EntityFrameworkCore.PostgreSQL --context-dir Data --output-dir Models/Generated --context-namespace database.Data -n database.Models -DataAnnotation`

# Migrations
