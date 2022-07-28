export type ResourceType = 'alternate' | 'author' | 'bookmark' | 'canonical' | 'dns-prefetch' | 'external' | 'help' | 'icon' | 'license' | 'manifest' | 'me' | 'modulepreload' | 'next' | 'nofollow' | 'noopener' | 'noreferrer' | 'opener' | 'pingback' | 'preconnect' | 'prefetch' | 'preload' | 'prerender' | 'prev' | 'search' | 'shortlink' | 'stylesheet' | 'tag'

export interface Props {
	rel: ResourceType | string
	href: string
}

type Autocomplete<T, K extends keyof Props> = (
	K extends keyof T ? {
		rel: Exclude<Props[K], string> | string & Record<never, never>
	} : T
)

export function Resource<T>(props: Props & (
	'rel' extends keyof T ? {
		rel: ResourceType | string & Record<never, never>
	} : T
)): any
