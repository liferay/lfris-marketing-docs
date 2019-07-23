# Whitepapers

## Introduction
When an asset is uploaded following these instructions, it will be displayed on the new resources page `/resources`.

Note: presentations (recordings and slides) and webinars (recordings and slides) currently don't live on the resources page. It is on the roadmap, but will continue to live in the events site until then.

_This is a copy of the documentation that used to live on [in.liferay.com](https://in.liferay.com/web/marketing/wiki/-/wiki/Main/How+to+Upload+Whitepapers+to+liferay.com)_

## Instructions
### Update the Marcom Assets & Metadata Doc

1. Navigate to the MarCom Assets and Metadata doc.
2. If you cannot edit the doc, request editing rights by.
	- Instructions for requesting permissions can be found [here](https://liferay.github.io/web-dev-lrdcom/#/docs/General~2Fpermissions#process-for-granting-user-roles).
3. Navigate to the 'Whitepapers and eBooks' sheet.
4. If the doc you are uploading does not already exist on the sheet, add it as a new row to the bottom of the list. Fill out all the columns. If you have questions, there are notes in row 1.

### Upload to liferay.com

1. Go to https://www.liferay.com
2. Login (in side menu)
	- If you do not see the toolbars or edit controls let Ryan Schuhler know and he can check your permissions.
3. Go to Site Administration by either:
	- Clicking Admin > Contentx
	- Or going to https://www.liferay.com/group/control_panel?doAsGroupId=10182&controlPanelCategory=current_site.content
4. In Site Administration, go to Documents and Media > RESOURCES
5. Go into folder for your Resource Type
6. Add folder if it does not exist. Make sure it is in ALL CAPS (e.g. BUSINESS WHITEPAPERS)
7. Create new resource by clicking Add > Resource Type (e.g. Whitepaper)
	- **Title**
		- Note that the title will be used to create the url (e.g. “What is a Portal” url will be “/resources/whitepapers/what-is-a-portal”, or "Aufbau einer Plattform fuer einen nutzerzentrierten digitalen Arbeitsplatz" becomes "/Aufbau+einer+Plattform+fuer+einen+nutzerzentrierten+digitalen+Arbeitsplatz")
		- Note that the title cannot contain any of the following characters: `: ? ' " ¿`
	- The **Display Title** field is the title that will be shown on the page. Feel free to use any of the previously restricted characters.
	- Fill in all applicable fields
		- **Description** - description that displays on the whitepaper's landing page.
		- **Primary Buyer Stage** (Required) - Controls how many points are rewarded leads for downloading the whitepaper. Can be used for content targeting in the future.
		- **Primary Persona, Secondary Personas** - Can be used for content targeting in the future.
		- **Product Name** - Can be used for content targeting in the future.
		- **Language** - Used to control the sorting order of resources on the resources overview page
			- Resources with the same language as the user's default language will be sorted to the top. After will be English language assets. Assets from the remaining languages will be hidden from display.
		- **Open Graph Images** - This is the image that is used in previews when the URL is shared on social media sites and chat applications. Add the URL of the image. To find the URL of an image in the Liferay document library, click "Get URL." If you don't define an open graph image for this page, the page will use the default liferay.com image. A 1200x1200 px image is ideal but not required. Learn more.
		- **Seo Description** - This is the meta description. Reference the wiki article for best practices. If no meta description is defined, the landing page will have no meta description.
		- **Seo Title** - This is the page title. Reference the wiki article for best practices. If no page title is defined, the page will use the article title. This is not ideal when the document title has punctuation or special characters.
	- Under the Categorization tab all of the following categories must be provided or the Whitepaper will not display on the Resources page.
		- **Category List Filter:** Resources
		- **Industries**
		- **Language**
		- **Resource Type:** i.e., Business Whitepapers or Technical Whitepapers
	- Click Publish