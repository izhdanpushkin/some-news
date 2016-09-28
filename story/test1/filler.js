var MainTitle = MainTitle.replace('%title%', 'Some Main Title Of Some Story');
var MainTitle = MainTitle.replace('%summary%', 'This is some description of some story');

$(".page-body").append(MainTitle);
$(".page-body").append(StoryMainBody);

var StoryMainPicture = StoryMainPicture.replace('%path%', './pics/story-4.jpg');
var StoryMainPicture = StoryMainPicture.replace('%text%', 'Description of main picture');

$(".story-col").prepend(StoryMainContainer);
$(".story-col").prepend(StoryMainPicture);
$(".story-container").append(StorySocialButtons);

var StoryTitle = StoryTitle.replace('%title%', 'This is the title of the story');

$(".story-container").append(StoryTitle);

// Paragraph
// Uncomment (ctrl+/ or delete '//' in the beginning of the line), copy and paste following two lines (up to one ending with "...StoryParagraph1);") to create paragraphs. For more comfortable flow control use it in the bottom of the file

// var StoryParagraph1 = StoryParagraph.replace('%text%', 'PLACE PARAGRAPH TEXT HERE');
// $(".story-col").append(StoryParagraph1);


// Video
// For now use pictures instead of video. Uncomment (ctrl+/ or delete '//' in the beginning of the line), copy and paste following three lines (up to one ending with "...StoryVideoContainer1);") to create video blocks. For more comfortable flow control use it in the bottom of the file

// var StoryVideoContainer1 = StoryVideoContainer.replace('%path%', 'pics/story-3.jpg');
// var StoryVideoContainer1 = StoryVideoContainer1.replace('%description%', 'PLACE VIDEO DESCRIPTION HERE');
// $(".story-container").append(StoryVideoContainer1);

// For now it's just sort of a placeholder for side block of newslines, need to automatize
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

// ###########################
// Place your paragraphs, videos and galleries (to do) below this line in order in which you want them to appear on the page

var StoryParagraph1 = StoryParagraph.replace('%text%', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
$(".story-container").append(StoryParagraph1);
var StoryParagraph1 = StoryParagraph.replace('%text%', 'おやがめの背中にこがめをのせて、こがめの背中にまごがめのせて、まごがめの背中にひまごがめのせて、おやがめこけたらこがめまごがめひまごがめこけた。');
$(".story-container").append(StoryParagraph1);

var StoryVideoContainer1 = StoryVideoContainer.replace('%path%', 'pics/story-3.jpg');
var StoryVideoContainer1 = StoryVideoContainer1.replace('%description%', 'PLACE VIDEO DESCRIPTION HERE');
$(".story-container").append(StoryVideoContainer1);

var StoryParagraph1 = StoryParagraph.replace('%text%', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
$(".story-container").append(StoryParagraph1);
var StoryParagraph1 = StoryParagraph.replace('%text%', 'おやがめの背中にこがめをのせて、こがめの背中にまごがめのせて、まごがめの背中にひまごがめのせて、おやがめこけたらこがめまごがめひまごがめこけた。');
$(".story-container").append(StoryParagraph1);

var StoryVideoContainer1 = StoryVideoContainer.replace('%path%', 'pics/story-2.jpg');
var StoryVideoContainer1 = StoryVideoContainer1.replace('%description%', 'PLACE VIDEO DESCRIPTION HERE');
$(".story-container").append(StoryVideoContainer1);

var StoryParagraph1 = StoryParagraph.replace('%text%', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
$(".story-container").append(StoryParagraph1);
var StoryParagraph1 = StoryParagraph.replace('%text%', 'おやがめの背中にこがめをのせて、こがめの背中にまごがめのせて、まごがめの背中にひまごがめのせて、おやがめこけたらこがめまごがめひまごがめこけた。');
$(".story-container").append(StoryParagraph1);