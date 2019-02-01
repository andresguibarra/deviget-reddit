export interface RedditPosts {
  kind: string;
  data: Data;
}
export interface Data {
  modhash: string;
  dist: number;
  children?: (ChildrenEntity)[] | null;
  after: string;
  before?: null;
}
export interface ChildrenEntity {
  kind: string;
  data: Data1;
}
export interface Data1 {
  approved_at_utc?: null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext?: (LinkFlairRichtextEntityOrAuthorFlairRichtextEntity | null)[] | null;
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class?: string | null;
  downs: number;
  thumbnail_height?: number | null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  author_flair_background_color?: string | null;
  subreddit_type: string;
  ups: number;
  domain: string;
  media_embed: MediaEmbed;
  thumbnail_width?: number | null;
  author_flair_template_id?: string | null;
  is_original_content: boolean;
  user_reports?: (null)[] | null;
  secure_media?: SecureMediaOrMedia | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: string | null;
  secure_media_embed: SecureMediaEmbed;
  link_flair_text?: string | null;
  can_mod_post: boolean;
  score: number;
  approved_by?: null;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class?: string | null;
  author_flair_richtext?: (AuthorFlairRichtextEntity | null)[] | null;
  gildings: Gildings;
  post_hint?: string | null;
  content_categories?: (string)[] | null;
  is_self: boolean;
  mod_note?: null;
  created: number;
  link_flair_type: string;
  wls: number;
  banned_by?: null;
  author_flair_type: string;
  contest_mode: boolean;
  selftext_html?: string | null;
  likes?: null;
  suggested_sort?: string | null;
  banned_at_utc?: null;
  view_count?: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview | null;
  media_only: boolean;
  link_flair_template_id?: string | null;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: string | null;
  visited: boolean;
  num_reports?: null;
  distinguished?: null;
  subreddit_id: string;
  mod_reason_by?: null;
  removal_reason?: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons?: null;
  author: string;
  num_crossposts: number;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  mod_reports?: (null)[] | null;
  author_patreon_flair: boolean;
  author_flair_text_color?: string | null;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  media?: SecureMediaOrMedia1 | null;
  is_video: boolean;
  author_cakeday?: boolean | null;
}
export interface LinkFlairRichtextEntityOrAuthorFlairRichtextEntity {
  e: string;
  t: string;
}
export interface MediaEmbed {
  content?: string | null;
  width?: number | null;
  scrolling?: boolean | null;
  height?: number | null;
}
export interface SecureMediaOrMedia {
  type?: string | null;
  oembed?: Oembed | null;
  reddit_video?: RedditVideoPreviewOrRedditVideo | null;
}
export interface Oembed {
  provider_url: string;
  description?: string | null;
  title: string;
  thumbnail_width: number;
  height: number;
  width: number;
  html: string;
  version: string;
  provider_name: string;
  thumbnail_url: string;
  type: string;
  thumbnail_height: number;
  author_name?: string | null;
  author_url?: string | null;
  url?: string | null;
}
export interface RedditVideoPreviewOrRedditVideo {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}
export interface SecureMediaEmbed {
  content?: string | null;
  width?: number | null;
  scrolling?: boolean | null;
  media_domain_url?: string | null;
  height?: number | null;
}
export interface AuthorFlairRichtextEntity {
  a?: string | null;
  e: string;
  u?: string | null;
  t?: string | null;
}
export interface Gildings {
  gid_1: number;
  gid_2: number;
  gid_3: number;
}
export interface Preview {
  images?: (ImagesEntity)[] | null;
  reddit_video_preview?: RedditVideoPreviewOrRedditVideo1 | null;
  enabled: boolean;
}
export interface ImagesEntity {
  source: ResolutionsEntityOrSource;
  resolutions?: (ResolutionsEntityOrSource)[] | null;
  variants: Variants;
  id: string;
}
export interface ResolutionsEntityOrSource {
  url: string;
  width: number;
  height: number;
}
export interface Variants {
  gif?: GifOrMp4OrObfuscatedOrNsfw | null;
  mp4?: GifOrMp4OrObfuscatedOrNsfw1 | null;
  obfuscated?: GifOrMp4OrObfuscatedOrNsfw2 | null;
  nsfw?: GifOrMp4OrObfuscatedOrNsfw3 | null;
}
export interface GifOrMp4OrObfuscatedOrNsfw {
  source: ResolutionsEntityOrSource;
  resolutions?: (ResolutionsEntityOrSource)[] | null;
}
export interface GifOrMp4OrObfuscatedOrNsfw1 {
  source: ResolutionsEntityOrSource;
  resolutions?: (ResolutionsEntityOrSource)[] | null;
}
export interface GifOrMp4OrObfuscatedOrNsfw2 {
  source: ResolutionsEntityOrSource;
  resolutions?: (ResolutionsEntityOrSource)[] | null;
}
export interface GifOrMp4OrObfuscatedOrNsfw3 {
  source: ResolutionsEntityOrSource;
  resolutions?: (ResolutionsEntityOrSource)[] | null;
}
export interface RedditVideoPreviewOrRedditVideo1 {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}
export interface SecureMediaOrMedia1 {
  type?: string | null;
  oembed?: Oembed | null;
  reddit_video?: RedditVideoPreviewOrRedditVideo | null;
}
