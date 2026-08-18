import React, { useEffect, useState } from 'react'
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud'

const iconSlugs = [
    'react',
    'django',
    'python',
    'typescript',
    'javascript',
    'nodedotjs',
    'postgresql',
    'docker',
    'redis',
    'git',
    'github',
    'html5',
    'css3',
    'tailwindcss',
    'postman',
    'firebase',
    'nginx',
    'linux',
    'sqlite',
    'celery',
    'googlemaps',
    'jwt'
]

const cloudOptions = {
    clickToFront: true,
    depth: 1,
    dragControl: true,
    imageScale: 2.2,
    initial: [0.08, -0.08],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
    maxSpeed: 0.04,
    minSpeed: 0.01,
}

const TechOrbit = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        let isMounted = true
        fetchSimpleIcons({ slugs: iconSlugs }).then((res) => {
            if (isMounted) {
                setData(res)
            }
        })
        return () => {
            isMounted = false
        }
    }, [])

    if (!data) {
        return (
            <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[370px] md:h-[370px] lg:w-[420px] lg:h-[420px] mx-auto flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-accent-500/30 border-t-accent-500 rounded-full animate-spin" />
            </div>
        )
    }

    const renderedIcons = Object.values(data.simpleIcons).map((icon) =>
        renderSimpleIcon({
            icon,
            minContrastRatio: 1.2,
            bgHex: '#0b0f1a',
            fallbackHex: '#3b82f6',
            size: 42,
            aProps: {
                href: undefined,
                target: undefined,
                rel: undefined,
                onClick: (e) => e.preventDefault(),
            },
        })
    )

    return (
        <div
            className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[370px] md:h-[370px] lg:w-[420px] lg:h-[420px] mx-auto flex items-center justify-center relative cursor-grab active:cursor-grabbing"
            aria-label="Interactive 3D Technology Icon Cloud"
            role="img"
        >
            <Cloud containerProps={{ className: 'w-full h-full' }} options={cloudOptions}>
                {renderedIcons}
            </Cloud>
        </div>
    )
}

export default TechOrbit
