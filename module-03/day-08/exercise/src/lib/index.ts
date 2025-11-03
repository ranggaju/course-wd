import { Pool } from "pg";

const pool = new Pool({
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 6543,
  database: "postgres",
  user: "postgres.qvfyksignqdbgzfcbyoq",
  password: "dj9vhf0TxA0ou8Mo",
});

export default pool;
