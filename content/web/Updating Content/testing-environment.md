# Testing Environment
> There are times when we want to make changes to the website but are hesitant to cause unintended changes. Having a testing environment allows us to preview the changes before we apply them on production.

## What Is UAT?
UAT is our testing environment for liferay.com. It looks identical to the live site, but the changes made here will not be reflected on liferay.com. This makes it ideal for practicing content updates and experimenting with areas of the site.

## Accessing UAT
1. To access UAT, simply follow the URL:
[www-uat.liferay.com](www-uat.liferay.com)

<img src="/images/web/Updating_Content/uat-sign-in.png">
   2. Sign in using your Liferay email address. Remember to add `.broken` at the end.
</img>

For example, Joe Bloggs would sign in with
```
User Name: joe.bloggs@liferay.com.broken
Password: [Please ask the web team for the password.]
```

## Accessing UAT Off-Site
For security reasons, accessing [UAT](www-uat.liferay.com) off-site requires an extra step of authentication.

<img src="/images/web/Updating_Content/uat-authenticate-offsite.png">
    When you go to [UAT](www-uat.liferay.com), you will be prompted to enter your Liferay username and password to verify your identity.
</img>

For example, Joe Bloggs would authenticate with:

    User Name: joe.bloggs
    Password: [Joe Bloggs' Liferay password]

To avoid authentication before accessing [UAT](www-uat.liferay.com), connect to Liferay's server room using VPN.

To set up VPN, please contact IT for instructions.
