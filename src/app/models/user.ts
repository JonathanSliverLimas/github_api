export class User{
    constructor(
        public name: string,
        public bio: string,
        public followers: number,
        public following: number,
        public public_repos: number,
        public avatar: string,
        public url_github: string,
        public twitter_username: string,
        public website: string
    ){}
}