
export interface AssesmentHistory {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  course_module_test?: CourseModuleTest | null;
  consumedTime?: Date | string;
  completed?: boolean;
  totalMarks?: number;
  obtainedMarks?: number;
  user?: User | null;
  one_time?: boolean;
  course?: Course | null;
};

export interface Award {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  web_medias?: WebMedia[] | null;
  order?: number;
};

export interface Blog {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription?: string;
  excerpt?: string;
  metaKeywords?: string;
  web_medias?: WebMedia[] | null;
  content?: string;
};

export interface Categorie {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  courses?: Course[] | null;
  description?: string;
  category_banners?: WebMedia[] | null;
  category_thumbnails?: WebMedia[] | null;
};

export interface Course {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  short_description?: string;
  regular_price: number;
  sale_price?: number;
  language?: "Hindi" | "Bengali" | "Marathi" | "Gujarati" | "Punjabi" | "Assamese" | "Odia" | "Sindhi" | "Urdu" | "Kashmiri" | "Konkani" | "Tamil" | "Telugu" | "Kannada" | "Malayalam" | "Tulu" | "Manipuri (Meitei)" | "Bodo" | "Mizo (Lushai)" | "Lepcha" | "Santali" | "Mundari" | "Ho" | "Sanskrit" | "Maithili" | "Dogri" | "Rajasthani" | "Awadhi" | "Bhojpuri" | "Chhattisgarhi" | "Magahi" | "Garhwali" | "Kumaoni" | "Marwari" | "Haryanvi" | "Bhili" | "Gondi" | "Khasi" | "Mizo" | "Nagamese" | "Limbu" | "Sherpa" | "Chinese (Mandarin, Cantonese, Wu, Hakka, Min)" | "Japanese" | "Korean" | "Arabic" | "Persian (Farsi, Dari, Tajik)" | "Turkish" | "Hebrew" | "Thai" | "Vietnamese" | "Khmer" | "Burmese" | "Malay" | "Indonesian" | "Tagalog" | "Swahili" | "Amharic" | "Zulu" | "Yoruba" | "Hausa" | "Igbo" | "Somali" | "Shona" | "Berber" | "Afrikaans" | "Tigrinya" | "Quechua" | "Guaraní" | "Nahuatl" | "Aymara" | "Mapudungun" | "Cree" | "Inuit (Inuktitut)" | "Maori" | "Hawaiian" | "Fijian" | "Samoan" | "Tongan" | "English" | "French" | "Spanish" | "German" | "Italian" | "Portuguese" | "Russian" | "Dutch" | "Greek" | "Polish" | "Czech" | "Slovak" | "Hungarian" | "Finnish" | "Swedish" | "Norwegian" | "Danish" | "Romanian" | "Bulgarian" | "Serbian" | "Croatian" | "Bosnian" | "Slovenian" | "Latvian" | "Lithuanian" | "Estonian" | "Ukrainian" | "Belarusian" | "Georgian" | "Armenian" | "Albanian" | "Macedonian";
  rank_tags?: "Bestseller" | "Trending" | "Popular" | "Value for money";
  is_in_subscription?: boolean;
  long_description?: string;
  rating?: number;
  number_of_student_enrolled?: number;
  course_instructures?: CourseInstructure[] | null;
  course_includes?: CourseInclude[] | null;
  course_related_topics?: CourseRelatedTopic[] | null;
  course_reviews?: CourseReview[] | null;
  course_what_you_learns?: CourseWhatYouLearn[] | null;
  certificate_sample_text?: string;
  course_discussion?: CourseDiscussion | null;
  course_events?: CourseEvent[] | null;
  course_banner?: WebMedia | null;
  course_thumbnail?: WebMedia | null;
  certificate_sample?: WebMedia | null;
  course_modules?: CourseModule[] | null;
};

export interface CourseContent {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  course_modules?: CourseModule[] | null;
};

export interface CourseDiscussion {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  Name?: string;
  course_discussion_questions?: CourseDiscussionQuestion[] | null;
};

export interface CourseDiscussionQuestion {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  question?: string;
  upvote?: number;
  course_discussion_question_answeres?: CourseDiscussionQuestionAnswere[] | null;
  questionImage?: WebMedia | null;
};

export interface CourseDiscussionQuestionAnswere {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  answere?: string;
  answere_images?: WebMedia[] | null;
};

export interface CourseEvent {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  description?: string;
  starts?: Date | string;
  ends?: Date | string;
  joiningLink?: string;
  password?: string;
  is_online?: boolean;
  streetAddress?: string;
  cityOrTown?: string;
  State?: string;
  postalCode?: number;
  Country?: string;
  image?: WebMedia[] | null;
};

export interface CourseInclude {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  value?: string;
  lucide_icon?: "Activity  " | "Airplay  " | "Alarm  " | "AlertCircle  " | "AlertOctagon  " | "AlertTriangle  " | "AlignCenter  " | "AlignJustify  " | "AlignLeft  " | "AlignRight  " | "Anchor  " | "Aperture  " | "Archive  " | "ArrowBigDown  " | "ArrowBigLeft  " | "ArrowBigRight  " | "ArrowBigUp  " | "ArrowDown  " | "ArrowLeft  " | "ArrowRight  " | "ArrowUp  " | "AtSign  " | "Award  " | "Axe  " | "Backpack  " | "Banana  " | "Banknote  " | "BarChart  " | "BarChart2  " | "Battery  " | "BatteryCharging  " | "BatteryFull  " | "BatteryLow  " | "BatteryMedium  " | "Beaker  " | "Bell  " | "BellOff  " | "Bike  " | "Binary  " | "Bitcoin  " | "Bluetooth  " | "Bold  " | "Book  " | "BookOpen  " | "Bookmark  " | "Box  " | "Briefcase  " | "Brush  " | "Bug  " | "Building  " | "Bus  " | "Calculator  " | "Calendar  " | "Camera  " | "CameraOff  " | "Car  " | "Carrot  " | "Cast  " | "Check  " | "CheckCircle  " | "CheckSquare  " | "ChevronDown  " | "ChevronLeft  " | "ChevronRight  " | "ChevronUp  " | "Circle  " | "CircleSlash  " | "Clipboard  " | "Clock  " | "Cloud  " | "CloudDrizzle  " | "CloudFog  " | "CloudHail  " | "CloudLightning  " | "CloudOff  " | "CloudRain  " | "CloudSnow  " | "CloudSun  " | "Code  " | "Codepen  " | "CodeSandbox  " | "Coffee  " | "Columns  " | "Command  " | "Compass  " | "Contrast  " | "Copy  " | "CornerDownLeft  " | "CornerDownRight  " | "CornerLeftDown  " | "CornerLeftUp  " | "CornerRightDown  " | "CornerRightUp  " | "CornerUpLeft  " | "CornerUpRight  " | "Cpu  " | "CreditCard  " | "Crop  " | "Crosshair  " | "Crown  " | "CurrencyDollar  " | "CurrencyEuro  " | "CurrencyPound  " | "CurrencyYen  " | "Database  " | "Delete  " | "Disc  " | "Divide  " | "DivideCircle  " | "DivideSquare  " | "DollarSign  " | "Download  " | "DownloadCloud  " | "Dribbble  " | "Droplet  " | "Droplets  " | "Edit  " | "Edit2  " | "Edit3  " | "Egg  " | "Equal  " | "EqualNot  " | "Eraser  " | "ExternalLink  " | "Eye  " | "EyeOff  " | "Facebook  " | "FastForward  " | "Feather  " | "Figma  " | "File  " | "FileCheck  " | "FileCode  " | "FileMinus  " | "FilePlus  " | "FileText  " | "FileX  " | "Film  " | "Filter  " | "Flag  " | "Flame  " | "Flashlight  " | "Flask  " | "FlipHorizontal  " | "FlipVertical  " | "Flower  " | "Folder  " | "FolderMinus  " | "FolderPlus  " | "Form  " | "Forward  " | "Frown  " | "Gamepad  " | "Gauge  " | "Gem  " | "Gift  " | "GitBranch  " | "GitCommit  " | "GitMerge  " | "GitPullRequest  " | "GitHub  " | "GitLab  " | "Globe  " | "Globe2  " | "Grab  " | "Grid  " | "GripHorizontal  " | "GripVertical  " | "Hammer  " | "Hand  " | "HardDrive  " | "Hash  " | "Headphones  " | "Heart  " | "HeartBroken  " | "HelpCircle  " | "Hexagon  " | "Highlighter  " | "History  " | "Home  " | "Hourglass  " | "IceCream  " | "Image  " | "Inbox  " | "Infinity  " | "Info  " | "Instagram  " | "Italic  " | "Joystick  " | "Key  " | "Keyboard  " | "Landmark  " | "Languages  " | "Laptop  " | "Layout  " | "Leaf  " | "LifeBuoy  " | "Lightbulb  " | "Link  " | "Link2  " | "LinkedIn  " | "List  " | "Loader  " | "Lock  " | "LogIn  " | "LogOut  " | "Mail  " | "MailOpen  " | "Map  " | "MapPin  " | "Maximize  " | "Maximize2  " | "Medal  " | "Megaphone  " | "Meh  " | "Menu  " | "MessageCircle  " | "MessageSquare  " | "Mic  " | "MicOff  " | "Minimize  " | "Minimize2  " | "Minus  " | "MinusCircle  " | "MinusSquare  " | "Monitor  " | "MonitorOff  " | "Moon  " | "MoreHorizontal  " | "MoreVertical  " | "Mountain  " | "MousePointer  " | "Move  " | "Music  " | "Navigation  " | "Navigation2  " | "Network  " | "Octagon  " | "Option  " | "Outdent  " | "Package  " | "Palette  " | "Paperclip  " | "Pause  " | "PauseCircle  " | "PenTool  " | "Pencil  " | "Percent  " | "Phone  " | "PhoneCall  " | "PhoneForwarded  " | "PhoneIncoming  " | "PhoneMissed  " | "PhoneOff  " | "PhoneOutgoing  " | "PictureInPicture  " | "PieChart  " | "Pin  " | "Play  " | "PlayCircle  " | "Plug  " | "Plus  " | "PlusCircle  " | "PlusSquare  " | "Pocket  " | "Power  " | "Printer  " | "Puzzle  " | "QrCode  " | "Quote  " | "Radio  " | "RadioButton  " | "Rewind  " | "Rocket  " | "RotateCcw  " | "RotateCw  " | "Rss  " | "Ruler  " | "Save  " | "Scale  " | "Scissors  " | "ScreenShare  " | "Search  " | "Send  " | "Server  " | "Settings  " | "Share  " | "Share2  " | "Shield  " | "ShieldOff  " | "ShoppingBag  " | "ShoppingCart  " | "Shovel  " | "Shrink  " | "Sidebar  " | "Signal  " | "SkipBack  " | "SkipForward  " | "Slack  " | "Slash  " | "Sliders  " | "Smartphone  " | "Smile  " | "Snowflake  " | "SortAscending  " | "SortDescending  " | "Speaker  " | "Sprout  " | "Square  " | "Star  " | "StopCircle  " | "Strikethrough  " | "Subscript  " | "Sun  " | "Sunrise  " | "Sunset  " | "Superscript  " | "SwissFranc  " | "SwitchCamera  " | "Table  " | "Tablet  " | "Tag  " | "Target  " | "Tent  " | "Terminal  " | "Thermometer  " | "ThumbsDown  " | "ThumbsUp  " | "Ticket  " | "Timer  " | "ToggleLeft  " | "ToggleRight  " | "Tool  " | "Trash  " | "Trash2  " | "Trello  " | "TrendingDown  " | "TrendingUp  " | "Triangle  " | "Trophy  " | "Truck  " | "Tv  " | "Twitch  " | "Twitter  " | "Type  " | "Umbrella  " | "Underline  " | "Undo  " | "Unlink  " | "Unlock  " | "Upload  " | "UploadCloud  " | "User  " | "UserCheck  " | "UserMinus  " | "UserPlus  " | "UserX  " | "Users  " | "Video  " | "VideoOff  " | "View  " | "Voicemail  " | "Volume  " | "Volume1  " | "Volume2  " | "VolumeX  " | "Wallet  " | "Watch  " | "Wifi  " | "WifiOff  " | "Wind  " | "Window  " | "Wrench  " | "X  " | "XCircle  " | "XSquare  " | "Youtube  " | "Zap  " | "ZapOff  " | "ZoomIn  " | "ZoomOut  " | "BookOpenCheck  " | "ShieldCheck  ";
  sr_number?: number;
};

export interface CourseInstructure {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  description?: string;
  linkedIn_link?: string;
  website_link?: string;
  web_medias?: WebMedia[] | null;
};

export interface CourseModule {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  sr_number?: number;
  course_module_texts?: CourseModuleText[] | null;
  course_module_videos?: CourseModuleVideo[] | null;
  course_module_tests?: CourseModuleTest[] | null;
};

export interface CourseModuleTest {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  marks?: number;
  one_time?: boolean;
  sr_number?: number;
  course_module_test_questions?: CourseModuleTestQuestion[] | null;
  duration?: Date | string;
};

export interface CourseModuleTestQuestion {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  question?: string;
  multi_select_option?: boolean;
  marks?: number;
  options?: CourseModuleTestQuestionOption[] | null;
  media_to_question?: WebMedia[] | null;
};

export interface CourseModuleTestQuestionOption {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  option_value?: string;
  correct?: boolean;
  media_in_option?: WebMedia[] | null;
};

export interface CourseModuleText {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  course_module_text_value?: string;
  course_module_text_resources?: WebMedia[] | null;
  sr_number?: number;
};

export interface CourseModuleVideo {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  description?: string;
  iFrame?: string;
  is_include_in_sample?: boolean;
  sr_number?: number;
};

export interface CourseRelatedTopic {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  Value?: string;
  sr_number?: number;
};

export interface CourseReview {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  value?: string;
  rating?: number;
  user?: User | null;
};

export interface CourseWhatYouLearn {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  value?: string;
  sr_number?: number;
};

export interface Event {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  place?: string;
  time?: string;
  date?: Date | string;
  url_link?: string;
  web_medias?: WebMedia[] | null;
  description?: string;
};

export interface Gallery {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  description?: string;
  web_medias?: WebMedia[] | null;
};

export interface HelpAndSupport {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  email?: string;
  issue?: string;
  message?: string;
  user_email?: string;
  Problem_Status?: "pending" | "in process" | "resolved";
};

export interface ResponseHistory {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  questionId?: CourseModuleTestQuestion | null;
  user?: User | null;
  selectedOption?: CourseModuleTestQuestionOption | null;
  correctOption?: CourseModuleTestQuestionOption | null;
  marks?: number;
  assesment_history?: AssesmentHistory | null;
};

export interface UserCourseHistory {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  course_module_tests?: CourseModuleTest[] | null;
  course_module_texts?: CourseModuleText[] | null;
  course_module_videos?: CourseModuleVideo[] | null;
  is_completed?: boolean;
};

export interface UserCoursePurchased {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  course?: Course | null;
  validUpto?: Date | string;
  result?: "Pass" | "Fail" | "Absent";
  user?: User | null;
};

export interface UserOrganisation {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  user_email?: string;
  user_organisation?: User | null;
};

export interface WebMedia {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  media_document_id?: string;
  media_original_name?: string;
  media_name?: string;
  isFolder?: boolean;
  media_alt?: string;
  media_caption?: string;
  media_parent?: string;
};

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  role: Role | null | number;
};

export interface Role {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description: string;
  type: string;
};

export interface FindOne<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};

export interface FindMany<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};
