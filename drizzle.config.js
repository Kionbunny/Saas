//// in this we will have our schemans and database credentials 
// export default {/// dialect specifies that our application is using a postgreSQL database
//     dialect : 'postgresql',

// }
export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts",
    out: "./drizzle",
    //// this the obj to hold the url connection string
    dbCredentials: {
      url: "postgresql://neondb_owner:O5NAlCI9hRya@ep-dawn-breeze-a5cx3g7f.us-east-2.aws.neon.tech/ThreadCraft?sslmode=require",
      connectionString:
        "postgresql://neondb_owner:O5NAlCI9hRya@ep-dawn-breeze-a5cx3g7f.us-east-2.aws.neon.tech/ThreadCraft?sslmode=require",
    },
  };
  