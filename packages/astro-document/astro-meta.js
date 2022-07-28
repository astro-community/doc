import { componentType, preventRender } from './shared.js'
import { default as Element } from './astro-element.astro'

const isAstroComponentFactory = { isAstroComponentFactory: true }
const asAstroResourceFactory = () => Object.assign(
	async (result, props, slots) => await Element(
		result,
		{
			[componentType]: 'meta',
			[preventRender]: props?.content == null || (props?.name == null && props?.property == null),
			...props,
		},
		slots
	),
	isAstroComponentFactory
)

export const Meta = asAstroResourceFactory()
