type skill = {
    name: string,
    percent: string,
    icon: string,
    color: string,
}

type project = {
    id: number,
    title: string,
    desc: string,
    img: string,
    live_link: string,
    github_link: string,
    tech: string[],
    reverce: boolean
}

type projectCard = {
    id: number,
    img: string,
    title: string,
    desc: string,
    tech: string[],
    live_link: string,
    github_link: string,
    reverce: boolean,
}