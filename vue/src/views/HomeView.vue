<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <nav>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
    <h1>REDDIT</h1>
    <h3>about us</h3>
    <h2>
      Reddit is a social media platform that provides an online community for people to discuss a
      wide range of topics. It is known for its diverse user base and numerous "subreddits," which
      are individual communities focused on specific subjects or interests. Users can create an
      account and participate in discussions by submitting text posts, sharing links, images, and
      videos, and commenting on other users' posts.
    </h2>
    <h2>
      The platform's interface consists of a homepage featuring popular and trending posts from
      various subreddits. Users can also customize their experience by subscribing to specific
      subreddits, which will then appear on their personalized homepage. Each subreddit typically
      has its own set of rules and moderators to ensure that discussions remain civil and on-topic.
    </h2>
    <h2>
      Reddit encourages users to vote on posts and comments, promoting a system of "upvoting" and
      "downvoting" that helps determine the visibility and popularity of content. Highly upvoted
      posts rise to the top of the subreddit or even the front page of Reddit, garnering more
      attention and engagement from the community.
    </h2>
    <h2>
      One of the unique aspects of Reddit is its emphasis on user anonymity, as many users adopt
      pseudonyms rather than real names. This allows for open and candid discussions on a wide array
      of topics, ranging from serious and intellectual debates to light-hearted and humorous
      content.
    </h2>
    <h2>
      In addition to discussions, Reddit also hosts AMA (Ask Me Anything) sessions, where notable
      individuals, such as celebrities, politicians, or experts in various fields, answer questions
      from the community. These AMAs provide a unique opportunity for users to engage directly with
      influential figures.
    </h2>
    <h2>
      Overall, Reddit serves as a hub for information, entertainment, and community engagement,
      enabling users to connect with like-minded individuals, discover new interests, and explore a
      vast array of topics through its user-generated content.
    </h2>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 0rem;
}
h2 {
  margin-bottom: 3rem;
  font-size: large;
}
h3 {
  margin-bottom: 3rem;
  font-size: 2rem;
}
.display {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
}
</style>
