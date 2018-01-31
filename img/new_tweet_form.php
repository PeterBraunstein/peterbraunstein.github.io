<!doctype html>
<html class="no-js" lang="">
    <?php include 'head.php'; ?>

<?php

//$sql = "INSERT INTO Tweets (tweet_id, user_id, tweet_content, tweet_time, username, name) VALUES ('4', '4', 'I just made a great painting. What happy little trees ;)', '1997-04-29 00:00:00', 'PaintOnMyFace', 'Bob Ross')";
//$this->db->query($sql);

?>





          <form class="flexOne flex" action="new_tweet" method="post">
            <input type="text" name="tweet_content" value="" placeholder="What's Happening?" id="newTweetInput">
            <button type="submit" name="submitted_tweet" value="tweet" class="tweetBtn newTweetBtn">Tweet</button>
          </form>

<html>
