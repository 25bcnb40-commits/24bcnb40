const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

<!-- FEEDBACK -->
<section id="feedback">
<div class="container card">
<h2 class="section-title">Feedback</h2>

<form class="feedback-form" id="feedbackForm">
<input type="text" id="name" placeholder="Your Name" required>
<input type="email" id="email" placeholder="Your Email" required>
<textarea rows="4" id="message" placeholder="Your Feedback" required></textarea>
<button type="submit">Submit Feedback</button>
</form>

<div class="feedback-status" id="status"></div>
</div>
</section>

<footer style="text-align:center;padding:20px;color:var(--muted)">
© 2026 Ankit Biyani
</footer>

<script>
/* 🔗 SUPABASE CONFIG */
const supabaseUrl = "https://zswfsajpzcbdrgfydiza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzd2ZzYWpwemNiZHJnZnlkaXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTk1ODQsImV4cCI6MjA4OTkzNTU4NH0.yh8VYYBTwaRo-hzM7s9bpEGZIuJMgw4wLZLBZb0-8Lg";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

/* 📨 FEEDBACK SUBMIT */
document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
e.preventDefault();

const status = document.getElementById("status");
status.innerText = "Submitting...";

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const { error } = await supabaseClient
.from("feedbacks")
.insert([{ name, email, message }]);

if (error) {
status.innerText = "❌ Error submitting feedback";
status.style.color = "red";
} else {
status.innerText = "✅ Feedback submitted successfully!";
status.style.color = "#00d4ff";
e.target.reset();
}});
</script>

</body>
</html>
// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
