// Use this file to construct a pretty news story page. Replace text in
// UPPERCASE and paths to files with what you need.

var MainTitle = MainTitle.replace('%title%', 'PLACE THE STORY MAIN TITLE HERE');
var MainTitle = MainTitle.replace('%summary%', 'PLACE THE STORY SUMMARY HERE');

$(".page-body").append(MainTitle);
$(".page-body").append(StoryMainBody);

var StoryMainPicture = StoryMainPicture.replace('%path%', 'pics/test.jpg');
var StoryMainPicture = StoryMainPicture.replace('%text%', 'PLACE TEXT FOR MAIN PICTURE HERE');

$(".story-col").prepend(StoryMainContainer);
$(".story-col").prepend(StoryMainPicture);
$(".story-container").append(StorySocialButtons);

var StoryTitle = StoryTitle.replace('%title%', 'PLACE STORY TITLE HERE');

$(".story-container").append(StoryTitle);

// For now it's just sort of a placeholder for side block of newslines, need to automatize, ignore code between this comment and next one
var SideStory1 = SideStory.replace(/%link%/gi, '#');
var SideStory1 = SideStory1.replace('%path%', 'pics/story-7.jpg');
var SideStory1 = SideStory1.replace('%text%', 'PLACE SIDE STORY TEXT HERE');
$(".side-col").append(SideStory1);

var SideStory1 = SideStory.replace(/%link%/gi, '#');
var SideStory1 = SideStory1.replace('%path%', 'pics/story-6.jpg');
var SideStory1 = SideStory1.replace('%text%', 'PLACE SIDE STORY TEXT HERE');
$(".side-col").append(SideStory1);

var SideStory1 = SideStory.replace(/%link%/gi, '#');
var SideStory1 = SideStory1.replace('%path%', 'pics/story-5.jpg');
var SideStory1 = SideStory1.replace('%text%', 'PLACE SIDE STORY TEXT HERE');
$(".side-col").append(SideStory1);

var SideStory1 = SideStory.replace(/%link%/gi, '#');
var SideStory1 = SideStory1.replace('%path%', 'pics/story-4.jpg');
var SideStory1 = SideStory1.replace('%text%', 'PLACE SIDE STORY TEXT HERE');
$(".side-col").append(SideStory1);


// Paragraph example
// Copy and paste following two lines of code (up to the one ending
// with "...StoryParagraph1);") to create paragraphs. Comment (place '//' at
// the beginning of each line) or delete this example when you're done.
var StoryParagraph1 = StoryParagraph.replace('%text%', 'THIS IS A SAMPLE PARAGRAPH');
$(".story-container").append(StoryParagraph1);

// Video example
// For now use pictures instead of video. Copy and paste
// following three lines of code (up to one ending with
// "...StoryVideoContainer1);") to create video blocks. Comment or delete this
// example when you're done.
var StoryVideoContainer1 = StoryVideoContainer.replace('%path%', 'pics/test.jpg');
var StoryVideoContainer1 = StoryVideoContainer1.replace('%description%', 'THIS IS A SAMPLE VIDEO DESCRIPTION');
$(".story-container").append(StoryVideoContainer1);


// ###########################
// Place your paragraphs, videos and galleries (to do) below this line in order that you want them to appear on the page