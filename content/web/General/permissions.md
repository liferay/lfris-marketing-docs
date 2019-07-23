# Permissions
> Let's make sure someone doesn't break the website.

## Overview
It is imperative that changes to the following areas on Liferay.com are closely monitored since they can all have a significant impact on a user's experience.
- Web Content
- Structures/Templates
- Documents & Media
- DDLs
- Page Information

The user roles and permissions outlined below help mitigate the possibility of accidentally breaking part/all of our site (You are all amazing and I know you would never do that. But... just in case.). With great power comes great responsibility. Use your powers wisely.

## Key roles we've identified for our site
- **Asset Uploader:** users who can upload documents to the documents and media library.
- **Content Editor:** users who can edit content. They are able to add and update web content articles as well as update page information.
- **DDL Administrator:** users who can edit and add items to Dynamic Data Lists.
- **Marketing Events Administrator:** users who can add and edit marketing events.
- **Role Delegator:** users who can assign roles to other users in their given site.

## Process for granting user roles
1. Create an LRIS Ticket on JIRA (this acts as a written record of the request).
2. Included in the ticket should be the following information:
	- User who needs the permission. Use @include syntax (eg: @bryan.cheung).
	- What roles the user needs.
	- Why the user needs the roles.
3. Leave a comment on the ticket with the names of people who should be notified about the updated permissions.
4. Get familiar with your new roles here (coming soon).