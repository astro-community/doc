export type Props = ({
	property: string
	content?: string
} | {
	name: string
	content?: string
})

export function Meta(props: Props): any
