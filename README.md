# Spotify player app - play your spotify playlist externally
![](./.github/app_screen.png)

To run application you need install and run auth-server app for credentials and client app.
## Subprojects

| project          | path                        | documentation                        |
|------------------|-----------------------------|--------------------------------------|
| auth-server      | [auth-server](auth-server)  | [readme](auth-server/README.md)      |
| client           | [client](client)            | [readme](client/README.md)           |

### Husky
[Husky](https://github.com/typicode/husky) is tool to add quality gates before commits or push.

We wish to keep commit messages in convention due to reasons:
- There's lot of developers working on this project
- gives us posibility to makes changelogs

That's why husky validate your commit message. See * [convention](docs/STYLEGUIDE.md) to be friendly to frontend developers.

Other hooks on husky are up to packages and their owners.

## Repository Documents
* [Styleguide](docs/STYLEGUIDE.md)
* [How to make hotfix](docs/HOTFIXES.md)