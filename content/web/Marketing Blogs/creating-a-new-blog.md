# Creating a New Marketing Blog Entry

## Introduction
Our new marketing blogs platform is here. Creating content for the world to see is as easy as ever. We've utilized the built in Blogs Portlet for content creation. All the data is currently stored on our web.liferay.com instance but is displayed with the latest and greatest styles on www.liferay.com. If you have any questions that aren't answered below, don't hesitate to contact the web team.

## Preparation
### Image Guidelines
What size, resolution and file types should your images be?
* Image <strong>size</strong> should be no larger than 200kb.
* <strong>Resolution</strong> may vary, but should adhere to the following:
	* Cover images, which appear as featured post header backgrounds on blog category pages should be 16:9 or 4:3 (i.e., 1280x800).
	* Images appearing within a blog post may vary, but should be between 640px to 980px wide.
* <strong>File types</strong> should adhere to the following:
	* JPG: in most cases an optimized jpg should be used for images with millions of colors including photographs and graphics with a variety of shades and gradients.
	* GIF/PNG: best for line art/cartoon-like graphics and images with transparent backgrounds.

### Resources
* image resizing: [birme.net](http://birme.net/)
* optimizing: [tinyjpg.com](https://tinyjpg.com/)
* image conversion: [cloudconvert.com](https://cloudconvert.com)

### Where do I store my images?
Upload blog images to [web.liferay.com](https://web.liferay.com/group/control_panel/manage?p_p_id=20&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&doAsGroupId=14&_20_struts_action=%2Fdocument_library%2Fview&_20_folderId=88321876) Documents &amp; Media in the `/Blogs` folder.

Navigating to the Blogs folder is easy from /marketing-blogs-admin. Go To &gt; Control Panel &gt; Documents and Media

## Creating a Blog Entry
1. Navigate to the [Marketing Blogs Admin](https://web.liferay.com/marketing-blogs-admin) page.
	* For practicing, please use the [UAT Marketing Blogs Admin](https://web-uat.liferay.com/marketing-blogs-admin) page on our User Acceptance Testing (UAT) environment.
2. Select "Add New Entry." If you don't see the button you probably don't have the correct permissions. Find out how to request them [here](https://liferay.github.io/web-dev-lrdcom/#/docs/General~2Fpermissions).
3. Fill in the Title (required) in English.  <img src="/images/web/Landing_Pages/title and-or display-title.png">A unique URL will be generated based on the Title, so make sure to select a title that is great for SEO!</img>
4. Enter Content (see "Editing Content" below for more information on editing content).
5. If your blog is written in a non-Latin character set (i.e., Japanese or Chinese), please use the Display Title field to enter your localized blog title. This field may also be used optionally if would like to specify an alternate display title.
6. Select an option for the "Marketing Blogs" category (Digital Business, Digital Transformation, etc.). Only choose one (see "Important Notes" section).
	* If you do not see the category you are looking for please contact someone from web team and we can add it for you. Depending on our current workload, you may be asked to open a JIRA ticket.
7. Publish your new blog.

## Viewing a Blog Entry
1. To view your new creation in all its glory, visit `www.liferay.com/blog/{region}/{category}/{your-new-blog-title-hyphenated}`
	* For practice blogs use `wwww-uat.liferay.com/{region}/{category}/{your-new-blog-title-hyphenated}`
	* Example: www.liferay.com/blog/en-us/customer-experience/we-ve-only-just-begun-
		* region: en-us
		* category: customer-experience
		* blog url title: we-ve-only-just-begun- (&quot;We&#39;ve Only Just Begun!&quot;)
		<br>Note: punctuation in the blog title will be replaced with a hyphen in the url title

## Editing Content
* For information on how to add a blog entry, please see the [Liferay Documentation](https://dev.liferay.com/discover/portal/-/knowledge_base/6-1/expressing-yourself-using-blogs#adding-blog-entries) on adding a blog entry.
* To add an image to your blog entry:
	* <img src="/images/web/Landing_Pages/add-image.png">Select the "Image" button on the editor.</img>
	* <img src="/images/web/Landing_Pages/image-url.png">Paste the full URL of the desired image into the URL field of the pop-up.</img>
	* <img src="/images/web/Landing_Pages/save-img.png">Select "Ok."</img>
* Upload images to web.liferay.com Documents & Media in the `/Blogs` folder.
	* Navigating to the Blogs folder is easy from /marketing-blogs-admin. Go To > Control Panel > Documents and Media
* Avoid using the copy/paste functionality to add content to your blog entry. Only use it if you are copying plain text (from a .txt file) exclusively.
* When adding a table, please solicit the help of a webteam member.

## Blog Category/Topic SEO Information
To populate SEO information for both Blog Categories and Topics:

* Go to Category section in Control Panel
* Go to "Marketing Blogs" Category
* <img src="/images/web/Landing_Pages/seo-category.png">Within the category you want to alter the description for, select the category, then hit add a category property by hitting "Edit"</img>
* <img src="/images/web/Landing_Pages/seo-category-description.png">Property Key: `description`.<br/>Property Value: `[Enter the category description]`</img>
* Hit Save

## Important Notes
<img src="/images/web/Landing_Pages/dont-choose-parent.png">
	When selecting an option for "Marketing Blogs" **make sure the parent folders of the category you choose are not selected.**
</img>