# Services Plan – Language Learning App Backend

This document outlines the structure and responsibilities of the service layer for our Node.js + Express backend using MongoDB (via Mongoose).

Services act as the **business logic layer** in our MVC architecture. They:
- Interact directly with Mongoose models
- Abstract logic away from controllers
- Are reusable and testable
- Help keep controllers lean and focused on HTTP request/response handling

---

## 🔹 1. UserService (`services/userService.js`)

### Purpose:
Handle all logic related to user management.

### Functions:

#### `registerUser(userData)`
- Hashes password using bcrypt
- Checks if email/username already exists
- Saves the user in MongoDB
- Returns the saved user or throws an error

#### `loginUser({ emailOrUsername, password })`
- Looks up user by email or username
- Verifies password with bcrypt
- If valid, generates JWT token
- Returns token + user info

#### `logoutUser()`
- Clears cookies / handles token invalidation client-side
- Could implement server-side token blacklist (optional)

#### `getUserById(userId)`
- Fetches user from DB using ID

#### `updateUser(userId, updateData)`
- Updates user profile information

#### `deleteUser(userId)`
- Deletes user account and associated data

---

## 🔹 2. AuthService (optional or included in UserService)

- Verifies JWT tokens
- Handles token expiration
- Could be split for larger apps

---

## 🔹 3. CourseService (`services/courseService.js`)

### Purpose:
Manage course creation and browsing.

### Functions:
- `createCourse(courseData, creatorId)`
- `getAllCourses()`
- `getCourseById(courseId)`
- `updateCourse(courseId, updateData)`
- `deleteCourse(courseId)`
- `enrollUser(courseId, userId)`
- `getUserCourses(userId)`

---

## 🔹 4. LessonService (`services/lessonService.js`)

- `createLesson(courseId, lessonData)`
- `getLessonsByCourse(courseId)`
- `getLessonById(lessonId)`
- `updateLesson(lessonId, updateData)`
- `deleteLesson(lessonId)`

---

## 🔹 5. ReviewService (`services/reviewService.js`)

- Implements spaced repetition algorithm
- `getNextReviewItems(userId)`
- `submitReviewResult(userId, lessonId, performance)`
- `getReviewHistory(userId)`

---

## 🔹 6. ProgressService (`services/progressService.js`)

- `trackLessonCompletion(userId, lessonId)`
- `getUserProgress(userId)`
- `resetProgress(userId)`
- `getCourseProgress(userId, courseId)`

---

## 🔹 7. FeedbackService (`services/feedbackService.js`)

- `submitFeedback(userId, content)`
- `getAllFeedback()`
- `deleteFeedback(feedbackId)`

---

## 🔹 8. CommunityService (`services/communityService.js`)

(Once the model is added)

- `createPost(userId, content)`
- `getAllPosts()`
- `getPostById(postId)`
- `likePost(postId, userId)`
- `addComment(postId, userId, comment)`

---

## 🔹 9. QuizService (`services/quizService.js`)

(Once the model is added)

- `createQuiz(lessonId, quizData)`
- `getQuizById(quizId)`
- `submitQuizAnswers(userId, quizId, answers)`
- `getUserQuizResults(userId)`

---

## 🔹 10. AdminService (optional)

- `getAllUsers()`
- `deleteUser(userId)`
- `updateUserRole(userId, role)`
- `getSystemStats()`

---

## 🧪 Testing Services
Each service should be unit tested in `/tests/services/` using **Jest**:
- Mock models using `jest.mock()`
- Assert input/output of service functions
- Handle error cases


