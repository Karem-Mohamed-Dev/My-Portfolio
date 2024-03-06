type skill = {
    name: string,
    percent: string,
    icon: string,
    color: string,
}

type BackEndData = {
    id: number,
    title: string,
    desc: string,
    documintation?: string,
    github_link?: string,
    tech: string[]
}

type FrontProject = {
    id: number,
    title: string,
    desc: string,
    img: string,
    live_link?: string,
    github_link?: string,
    tech: string[],
    reverce: boolean,
}
