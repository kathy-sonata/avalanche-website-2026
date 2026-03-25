<?php
header('Content-Type: application/json');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot check — if this hidden field has a value, it's a bot
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true]);
    exit;
}

// Collect and sanitize inputs
$firstName = trim(filter_input(INPUT_POST, 'firstName', FILTER_SANITIZE_SPECIAL_CHARS));
$lastName  = trim(filter_input(INPUT_POST, 'lastName', FILTER_SANITIZE_SPECIAL_CHARS));
$email     = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
$phone     = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS));
$service   = trim(filter_input(INPUT_POST, 'service', FILTER_SANITIZE_SPECIAL_CHARS));
$message   = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS));

// Validate required fields
if (empty($firstName) || empty($lastName) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

// Build email
$to = 'info@avalanchepowerclean.com';
$subject = 'New Quote Request from ' . $firstName . ' ' . $lastName;

$body  = "New quote request from the website:\n\n";
$body .= "Name: $firstName $lastName\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Service: $service\n\n";
$body .= "Message:\n$message\n";

// Prevent header injection
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safeName  = str_replace(["\r", "\n"], '', "$firstName $lastName");

$headers  = "From: $safeName <$safeEmail>\r\n";
$headers .= "Reply-To: $safeEmail\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email. Please call us directly.']);
}
