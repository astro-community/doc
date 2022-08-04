import { componentType, preventRender } from './shared.js'
import { default as Element } from './astro-element.astro'

const isAstroComponentFactory = { isAstroComponentFactory: true }

const asAstroResourceFactory = (rel = 'next') => Object.assign(
	async (result, props, slots) => await Element(
		result,
		{
			[componentType]: 'link',
			[preventRender]: props?.href == null,
			rel,
			...props,
		},
		slots,
	),
	isAstroComponentFactory
)

export const Resource = asAstroResourceFactory()

Object.assign(Resource, {
	Alternate: asAstroResourceFactory('alternate'),
	Canonical: asAstroResourceFactory('canonical'),
	Icon: asAstroResourceFactory('icon'),
	Preconnect: asAstroResourceFactory('preconnect'),
	Preload: asAstroResourceFactory('preload'),
	StyleSheet: asAstroResourceFactory('stylesheet'),
	TouchIcon: asAstroResourceFactory('apple-touch-icon'),
})
