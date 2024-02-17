const SliderData = [
    {
        id: 2,
        srcImg: './img/slider-2.jpg'
    },
]

const populaModelDatas = [
    {
        id: 1,
        srcImg: "./img/popular-1.webp"
    },
    {
        id: 2,
        srcImg: "./img/popular-2.webp"
    },
    {
        id: 3,
        srcImg: "./img/popular-3.webp"
    },
    {
        id: 4,
        srcImg: "./img/popular-4.webp"
    },
    {
        id: 5,
        srcImg: "./img/popular-5.webp"
    },
    {
        id: 6,
        srcImg: "./img/popular-6.webp"
    },
    {
        id: 7,
        srcImg: "./img/popular-7.webp"
    },
    {
        id: 8,
        srcImg: "./img/popular-8.webp"
    },



    {
        id: 9,
        srcImg: "./img/popular-9.webp"
    },
    {
        id: 10,
        srcImg: "./img/popular-10.webp"
    },
]

const brandDatas = [
    {
        id: 1,
        title: 'بنز',
        logoSvg: <svg
            data-v-1d57be6d=""
            data-v-ca4101d8=""
            viewBox="0 0 24 24"
            class="stepped-selection__list-item-brand-icon"
        >
            <path
                d="M18.98 7.97a8.068 8.068 0 0 1 .09 7.96l-5.9-4.57-1.05-7.41c2.84.04 5.44 1.57 6.87 4.03m-6.98 5.32 6.96 2.83a8.086 8.086 0 0 1-6.93 3.98c-2.85.01-5.5-1.48-6.96-3.94l6.93-2.87Zm-.1-9.34-1.1 7.32L4.97 16a8.05 8.05 0 0 1 .04-7.99c1.42-2.47 4.05-4 6.9-4.04M21 12.02c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9"
                fill="currentColor"
            ></path>
        </svg>,
        price: '9,800,000',
        increase: true
    },
    {
        id: 2,
        title: 'ولوو',
        price: '9,800,000',
        increase: true,
        logoSvg: <svg data-v-1d57be6d="" data-v-ca4101d8="" viewBox="0 0 24 24" class="stepped-selection__list-item-brand-icon"><path d="M11.46 12.54c-.07 0-.12 0-.16.02-.07.03-.13.08-.19.13.07.04.14.1.21.11.19.02.39 0 .58 0h1.38v-.77c-.1.06-.19.08-.22.13-.24.4-.36.46-.84.37v-1.05c.07 0 .13 0 .18-.02.06-.03.11-.08.16-.13-.06-.04-.12-.1-.18-.1h-1.25c-.09.35.22.18.32.29v1.03Zm-4.41-1.09c.13 0 .2.02.25 0 .05-.02.09-.08.13-.13-.04-.04-.09-.1-.13-.1H5.86c-.02.03-.03.05-.05.08.05.05.11.16.16.15.22-.03.29.1.37.26.09.18.19.36.29.54.32.57.32.58.97.55.1 0 .23-.09.29-.18.16-.26.3-.53.44-.8.11-.22.2-.46.57-.37-.03-.11-.08-.21-.13-.21-.32-.01-.64 0-.96 0-.01.03-.03.07-.04.1.1.07.19.13.31.21-.15.28-.31.57-.49.91-.19-.34-.35-.64-.54-.98m7.51-.02c-.09-.1-.14-.21-.19-.21-.44-.01-.89-.01-1.33 0-.05 0-.09.08-.13.12.04.04.09.11.13.1.23-.04.3.12.39.28.1.19.23.36.3.56.15.44.44.58.89.52.18-.02.31-.05.39-.23.11-.24.25-.47.38-.71.12-.23.21-.51.61-.45-.05-.11-.11-.19-.16-.2-.31-.01-.62 0-.94 0-.02.03-.03.07-.05.1.09.07.18.13.3.22-.14.27-.3.56-.49.9-.19-.34-.35-.64-.53-.97.15-.01.25-.02.44-.04m2.34 1.45c.22-.05.45-.07.65-.15.32-.12.51-.36.51-.72 0-.34-.18-.58-.49-.71-.43-.18-.87-.18-1.29 0-.29.13-.47.36-.47.69 0 .34.16.59.47.71.19.08.41.11.62.16m-7.03 0c.22-.05.44-.08.65-.16.31-.12.49-.36.49-.7 0-.34-.18-.58-.48-.71-.44-.19-.88-.19-1.32.01-.3.13-.46.37-.46.7 0 .32.17.57.47.69.2.08.42.11.65.17m8.3-2.43c-.51-2.42-2.99-5.07-6.61-4.83-1.65.11-3.05.78-4.2 1.97-.78.81-1.3 1.75-1.58 2.86h12.39ZM5.81 13.56c.54 2.45 2.99 5.02 6.54 4.83 3.38-.18 5.43-2.81 5.82-4.83H5.81Zm11.28-8.38c.12-.13.23-.26.38-.42-.31-.2-.63-.42-.96-.61-.16-.1-.27-.19-.19-.42h3.96v3.96c-.2.08-.31.01-.42-.17-.19-.33-.41-.65-.63-1-.15.16-.26.29-.39.43 1.5 2.12 2.01 4.46 1.43 7-.47 2.08-1.61 3.75-3.34 4.98-3.48 2.48-8.3 1.99-11.13-1.11-2.94-3.22-3.07-8-.29-11.3 2.87-3.4 7.9-4.04 11.58-1.34m-7.6 6.83c.02-.09.02-.19.05-.27.06-.17.17-.35.37-.29.13.04.28.18.32.31.05.16.05.37-.01.53-.05.13-.22.28-.34.28-.12 0-.24-.17-.34-.3-.05-.06-.03-.18-.05-.27m7.06-.02c.02-.08 0-.2.07-.27.09-.11.23-.27.33-.26.12.01.3.16.34.28.06.17.05.39 0 .56-.05.12-.23.28-.34.28-.12 0-.24-.18-.34-.3-.05-.06-.03-.18-.05-.29" fill="currentColor"></path></svg>,
    },
    {
        id: 3,
        title: 'آئودی',
        price: '800,000',
        increase: false,
        logoSvg: <svg data-v-1d57be6d="" data-v-ca4101d8="" viewBox="0 0 24 24" class="stepped-selection__list-item-brand-icon"><path d="M16.36 13.53c.69-.89.64-2.27 0-3.06-.62.82-.69 2.13 0 3.06M12 10.47c-.68.89-.64 2.24 0 3.06.67-.86.65-2.23 0-3.06m-4.36 0c-.68.89-.64 2.23 0 3.06.67-.87.65-2.22 0-3.06m8.15-.6c-.91-.74-2.34-.72-3.22.01.47.63.72 1.33.72 2.12s-.25 1.49-.72 2.12c.93.76 2.36.73 3.22 0-.95-1.42-.95-2.83 0-4.25m-7.57 4.25c.91.74 2.34.72 3.21 0-.95-1.42-.95-2.83 0-4.25-.9-.74-2.34-.72-3.21 0 .95 1.42.95 2.83 0 4.25m8.72 0c.92.75 2.54.81 3.58-.32 1.01-1.11.92-2.83-.2-3.81-1.13-.99-2.66-.76-3.38-.12.95 1.42.95 2.83 0 4.25M7.07 9.87c-.99-.79-2.62-.77-3.61.36-.96 1.08-.89 2.73.18 3.72 1.16 1.08 2.71.8 3.43.17-.95-1.42-.95-2.83 0-4.25m4.91-.59c.29-.16.56-.35.85-.46 1.22-.49 2.38-.35 3.45.42.07.05.1.06.18 0 .61-.47 1.32-.71 2.09-.71 1.8 0 3.18 1.32 3.42 2.92.29 1.96-1.02 3.72-2.97 3.98-.91.12-1.74-.1-2.49-.63-.04-.03-.09-.06-.13-.09-1.46 1.02-2.91 1.02-4.39 0-.62.49-1.35.76-2.17.76-.81 0-1.54-.26-2.15-.75-.31.17-.59.35-.89.48-2.1.87-4.45-.48-4.75-2.73a3.46 3.46 0 0 1 2.92-3.89c.95-.14 1.83.08 2.6.66.07.05.11.06.19 0 .62-.47 1.33-.71 2.1-.7.78 0 1.49.25 2.11.73.02.01.04.03.03.02" fill="currentColor"></path></svg>
    },
    {
        id: 4,
        title: 'بی ام و',
        price: '12,000,000',
        logoSvg: <svg data-v-1d57be6d="" data-v-ca4101d8="" viewBox="0 0 24 24" class="stepped-selection__list-item-brand-icon"><path d="M7.19 12.11h4.72v4.67c-2.4.01-4.66-2.01-4.72-4.67m4.89-4.93c2.48 0 4.7 2.1 4.71 4.71h-4.71V7.18Zm-5.07 4.8c0 2.75 2.22 4.98 4.97 4.98 2.75 0 4.99-2.22 4.99-4.97a4.98 4.98 0 1 0-9.96-.01m.28-4.87c.1-.11.11-.24.03-.35-.15-.19-.3-.2-.45-.04-.13.12-.25.25-.37.38-.02.02-.04.03-.05.04.14.15.27.28.41.42.03-.03.07-.06.1-.09.11-.12.23-.23.34-.35m.72.57a.33.33 0 0 0-.19-.52h-.11c-.09.01-.15.07-.22.13-.14.14-.28.29-.42.43l-.01.01c.15.16.3.31.44.46.15-.15.3-.29.45-.44l.07-.07m8.91.72c.48-.26.96-.51 1.44-.77.08.09.16.18.25.27-.65.32-1.29.64-1.94.96-.08-.09-.17-.18-.25-.27.3-.46.6-.91.91-1.37-.49.25-.98.49-1.47.74l-.24-.27v-.04c.16-.24.32-.48.47-.72.22-.33.44-.67.66-1 0-.01.02-.03.03-.04.08.09.17.18.25.27-.31.45-.62.89-.93 1.34.49-.25.97-.5 1.46-.75l.25.28c-.3.46-.61.91-.91 1.36m-3.84-1.99h-.35c0-.53-.02-1.06-.03-1.59 0 .01 0 .02-.01.03-.17.51-.35 1.01-.52 1.52-.01.04-.03.05-.07.05h-.2c-.04 0-.05-.01-.06-.04l-.57-1.5c0-.01-.01-.03-.02-.04 0 .53.02 1.06.02 1.59h-.35l-.03-2.07h.47c.04 0 .05.01.06.04.19.51.38 1.02.56 1.53 0 .02.01.03.02.06.01-.03.02-.06.03-.08.16-.51.33-1.01.49-1.52 0-.03.02-.04.05-.04h.47l.03 2.08m-4.65.93c.02.11 0 .21-.05.31-.05.09-.1.19-.17.26-.24.25-.48.5-.73.74h-.01c-.49-.49-.99-.97-1.48-1.46L6 7.19c.24-.25.48-.49.73-.73.09-.09.2-.17.34-.19h.2c.28.08.43.35.34.63v.03c.04-.02.07-.03.1-.05.18-.07.34-.03.48.08.13.1.22.22.24.38M3.65 12c0-4.62 3.74-8.36 8.36-8.35 4.62 0 8.36 3.74 8.35 8.36 0 4.62-3.74 8.36-8.36 8.35-4.62 0-8.35-3.74-8.35-8.35m17.35.01c0-4.98-4.02-9.01-9-9.01-4.96 0-8.99 4.01-9 8.96-.02 4.99 4.01 9.01 8.96 9.04 5 .02 9.04-4.02 9.04-8.99" fill="currentColor"></path></svg>,
        increase: true
    },
    {
        id: 5,

        title: 'تویوتا',
        price: '34,800,000',
        logoSvg: <svg data-v-1d57be6d="" data-v-ca4101d8="" viewBox="0 0 24 24" class="stepped-selection__list-item-brand-icon"><path d="M13.3 10.55v-.03c-.05-.24-.1-.48-.16-.71-.11-.39-.23-.78-.45-1.13-.09-.14-.21-.27-.35-.36a.67.67 0 0 0-.91.12c-.19.23-.33.49-.43.78-.14.4-.23.81-.32 1.22 0 .03-.01.07-.02.11h2.64Zm-2.7 1.53v.07c.02.19.03.38.05.57.03.33.08.67.16.99.11.45.26.89.5 1.29.11.17.23.33.41.44.21.12.42.13.63.01.17-.09.3-.23.39-.39.22-.4.37-.82.46-1.27.09-.43.16-.87.19-1.31 0-.13.02-.26.02-.4h-2.82Zm3.51-1.69c.13-.02.28-.05.42-.07a6.7 6.7 0 0 0 1.24-.34c.33-.13.64-.29.89-.55.27-.28.38-.6.31-.99a1.01 1.01 0 0 0-.3-.53c-.17-.18-.37-.31-.58-.43-.49-.28-1.02-.46-1.56-.59-.73-.17-1.48-.25-2.23-.28-.29-.01-.58-.01-.87 0-.23 0-.47 0-.7.03-.33.03-.66.08-.99.12-.44.05-.87.16-1.3.3-.36.12-.72.25-1.04.44-.21.13-.42.26-.59.45-.15.17-.27.37-.28.61-.01.25.1.44.26.62.24.28.54.48.88.64.5.23 1.02.39 1.56.5l.6.12c.04 0 .06 0 .07-.05.01-.06.02-.12.04-.18.09-.35.17-.71.26-1.06.08-.33.18-.66.3-.98.2-.49.46-.93.89-1.25.05-.03.1-.07.16-.08.17-.04.34-.07.51-.05.34.05.61.24.84.49.23.27.4.57.55.89.2.45.35.91.47 1.39.07.28.13.57.2.85m5.02-1.28s-.02.09-.04.12c-.16.39-.37.74-.67 1.03-.34.32-.72.57-1.14.77-.54.26-1.11.44-1.69.58-.4.1-.8.16-1.2.24-.1.02-.11.02-.11.13l-.03 1.26v.1c-.01.14-.02.28-.04.41-.04.28-.07.55-.13.83-.07.38-.16.75-.32 1.11-.12.28-.22.57-.38.84-.15.24-.28.49-.46.71l-.06.09c.04 0 .06-.01.09-.02.17-.02.34-.03.51-.05.4-.07.8-.12 1.2-.21.34-.07.67-.17 1-.28.45-.15.9-.33 1.32-.56a8.32 8.32 0 0 0 1.67-1.22l.09-.09c.12-.13.24-.26.35-.39.28-.32.54-.65.73-1.04.23-.47.34-.96.36-1.48 0-.13-.01-.26-.02-.39-.01-.26-.07-.51-.15-.76a5.94 5.94 0 0 0-.75-1.54c-.04-.06-.08-.12-.12-.19M9.74 11.9c-.22-.04-.44-.07-.66-.11-.28-.06-.57-.13-.85-.19-.67-.15-1.31-.38-1.9-.73-.36-.21-.68-.46-.93-.79-.23-.3-.42-.63-.51-1 0 0 0-.01-.01-.02h-.01c-.21.31-.39.63-.55.97-.2.45-.34.91-.4 1.4-.04.34-.02.68.05 1.02.04.21.11.41.17.61.14.4.36.75.61 1.08.52.7 1.14 1.3 1.88 1.78.52.34 1.07.63 1.66.84.4.14.81.27 1.22.36.27.06.53.11.8.16.24.04.49.07.73.11l.29.03c-.06-.09-.12-.18-.18-.26-.2-.28-.37-.58-.54-.88-.17-.32-.3-.65-.41-1-.08-.28-.16-.57-.22-.85-.05-.2-.08-.4-.11-.6a7.45 7.45 0 0 1-.07-.68c-.02-.3-.03-.6-.05-.9 0-.11-.01-.22-.02-.35m11.78-.07c0 .15.01.31 0 .46-.08.94-.44 1.77-1.03 2.51-.54.67-1.2 1.21-1.93 1.66-.54.33-1.11.59-1.7.82-.49.19-1 .33-1.51.47-.29.08-.59.12-.89.18a5.9 5.9 0 0 1-.83.11c-.15.01-.31.03-.46.04-.23.02-.46.03-.69.04-.16 0-.32.02-.48.01-.31 0-.62 0-.93-.04-.39-.04-.79-.05-1.18-.13-.25-.05-.51-.08-.76-.13-.52-.1-1.03-.25-1.53-.42-.37-.13-.73-.29-1.09-.45-.51-.23-1-.5-1.45-.82-.27-.19-.53-.4-.78-.63-.54-.49-.98-1.05-1.3-1.7-.19-.39-.31-.81-.38-1.24-.05-.3-.06-.6-.03-.9.07-.72.3-1.4.7-2.01.29-.44.63-.82 1.01-1.18.34-.32.71-.6 1.1-.85.6-.38 1.23-.69 1.9-.94.57-.21 1.16-.38 1.75-.52.36-.08.73-.13 1.1-.19.48-.07.96-.1 1.45-.12h.03c.56 0 1.13 0 1.69.05 1.15.1 2.27.32 3.36.72.85.31 1.65.72 2.4 1.23.28.19.53.41.79.64.24.2.45.43.64.67.39.5.72 1.04.9 1.65.09.32.16.65.17.98" fill="currentColor"></path></svg>,
        increase: false
    },
    {
        id: 6,
        title: 'پورش',
        price: '34,800,000',
        logoSvg: <svg data-v-1d57be6d="" data-v-ca4101d8="" viewBox="0 0 24 24" class="stepped-selection__list-item-brand-icon"><path d="M11.87 20.12v-2.13H8.75c.96.86 2 1.54 3.12 2.13m2.59-7.59h3.08c.09 0 .1-.04.11-.12.02-.33.05-.67.08-1 .02-.23.03-.46.05-.7h-3.31v1.82ZM6.5 14.34c.1.61.31 1.16.6 1.69.05.09.11.12.22.12H11.87v-.76s-.09-.02-.13-.02c-.7-.07-1.26-.38-1.7-.94a.262.262 0 0 0-.18-.09H6.5m5.64-5.47c.83.08 1.65-.09 2.46.1h3.31c.05-.63.09-1.25.14-1.89h-5.92v1.8ZM5.89 6.3c4.09-1.14 8.16-1.14 12.23 0 .01-.07.02-.1.02-.14.03-.46.06-.92.1-1.38 0-.1-.02-.14-.11-.16-.55-.12-1.09-.25-1.64-.36-1.25-.25-2.51-.4-3.78-.45-1.15-.04-2.29.02-3.43.17-1.15.15-2.29.37-3.41.65-.08.02-.11.05-.1.13.02.15.02.3.03.45.03.35.05.71.08 1.1M9.8 9.22v3.66c0 .38.09.73.26 1.07.46.9 1.47 1.37 2.46 1.13.95-.23 1.67-1.14 1.68-2.12V9.22H9.81Zm4.92 5.25c-.14.12-.26.22-.36.32-.11.11-.19.24-.21.41.25-.04.5-.03.64-.3.09-.17.27-.27.48-.29-.11.15-.2.29-.32.46.21.01.37.04.53-.06.13-.09.3-.1.49-.05-.12.09-.3.05-.35.23.32.18.55.42.57.81-.06-.04-.12-.1-.17-.15-.26-.27-.56-.46-.95-.42-.67.07-1.29.27-1.89.56-.03.02-.07.05-.08.09-.06.2-.07.2-.26.14-.09-.03-.21.03-.27-.1-.06-.11.04-.19.06-.28.03-.16.11-.2.26-.17.05 0 .15-.03.16-.07.05-.14.06-.29.09-.42-.33.08-.66.17-.99.25v4.71s.05-.02.07-.03c1.33-.72 2.58-1.55 3.63-2.66.64-.67 1.15-1.42 1.47-2.3.21-.57.23-1.17.28-1.77.02-.19.03-.39.04-.58h-3.17v.19c0 .74-.31 1.33-.85 1.82-.18.16-.25.39-.17.64.15-.04.27-.1.35-.26.07-.16.19-.3.31-.42.16-.17.35-.29.63-.29M8.81 11c.17.07.27.02.37-.08.09-.1.21-.16.3-.25.04-.04.08-.1.09-.16.01-.18 0-.36 0-.54 0-.4-.05-.44-.45-.4-.02 0-.05 0-.07.01-.49.08-.92.3-1.33.56-.04.03-.06.09-.08.14-.05.17-.18.24-.34.18-.04-.01-.08 0-.12 0-.07-.02-.17-.04-.21-.1-.03-.05 0-.14 0-.21.02-.07.06-.12.09-.19.05-.1.12-.15.23-.13.19.03.19.03.23-.16.07-.33.18-.65.42-.9.11-.11.23-.19.43-.2-.32.3-.54.62-.53 1.08.07-.03.13-.07.2-.09.15-.05.22-.15.29-.29.1-.2.25-.39.4-.57.08-.1.21-.15.38-.12-.26.2-.42.44-.45.76.18-.04.34-.04.43-.24.06-.13.19-.24.31-.34.06-.05.16-.06.26-.09-.12.19-.23.35-.35.53.11.02.18.03.25.04 0-.1 0-.18.01-.27h2.31V5.75c-2.03 0-4 .33-5.96.85.15 1.99.3 3.97.46 5.96h3.19V11.5c0-.04-.05-.09-.09-.11-.19-.11-.4-.14-.61-.11-.43.07-.79.26-1.11.55-.07.07-.11.18-.18.26-.04.05-.1.13-.15.13-.11 0-.22-.05-.33-.08 0 0 0-.02-.01-.03-.04-.09.1-.37.2-.38.06 0 .12.01.18.02.03-.22.05-.43.1-.64.05-.21.14-.4.4-.49-.15.28-.24.55-.21.85.15-.07.25-.14.3-.31.06-.19.16-.36.27-.52.04-.06.15-.09.22-.13 0 .01.01.02.02.03-.15.17-.23.36-.24.58.16.02.23-.06.29-.2.04-.11.13-.22.21-.31.05-.05.13-.08.23-.13-.09.2-.17.35-.24.51m3.33 9.5h-.2s-.08-.05-.12-.08c-.56-.34-1.14-.65-1.69-1.01-1.08-.71-2.05-1.54-2.81-2.59-.58-.8-.98-1.67-1.07-2.66-.08-.93-.14-1.86-.21-2.79l-.21-2.85c-.08-1.13-.17-2.25-.26-3.38-.01-.17-.04-.35-.06-.52v-.18c1.63-.37 3.27-.72 4.95-.83 1.27-.08 2.53-.07 3.79.05 1.15.11 2.28.33 3.41.58.3.06.59.13.9.2 0 .08 0 .14-.01.2-.06.84-.13 1.67-.19 2.51l-.24 3.28c-.08 1.12-.18 2.24-.25 3.36-.04.59-.14 1.17-.37 1.72-.41 1-1.06 1.82-1.84 2.55-.94.89-2.02 1.6-3.15 2.23-.12.06-.23.14-.34.21M8.74 7.38c.1-.02.19-.02.27-.05.05-.02.1-.06.13-.1.13-.17.23-.36.37-.52.09-.1.22-.16.4-.14-.18.2-.37.38-.39.67.17 0 .34.06.49-.11.14-.15.33-.24.58-.24-.05.06-.09.1-.12.15-.06.07-.11.15-.17.22-.05.06-.03.1.03.15.12.09.23.19.33.3.06.06.08.16.12.24-.01 0-.02.02-.03.03-.03 0-.06-.01-.08-.03-.45-.36-.95-.39-1.48-.26s-1.03.33-1.49.63c-.06.04-.1.11-.12.17-.06.2-.2.28-.4.21-.04-.01-.08 0-.12 0-.11.02-.19-.02-.25-.11s-.04-.18.03-.27c.03-.04.06-.09.08-.14.04-.16.16-.23.32-.18.15.05.17.04.19-.12.06-.36.16-.7.36-1.01.16-.23.35-.35.59-.34-.36.35-.6.73-.57 1.25.15-.07.29-.13.42-.2.03-.02.05-.08.07-.12.12-.23.22-.48.36-.7.1-.16.27-.25.46-.28h.15c-.3.25-.5.52-.54.9m5.2 9.27c.19-.02.33-.06.44-.22.12-.16.29-.27.54-.25-.15.13-.27.24-.39.35 0 .02.02.04.03.06.11-.03.23-.04.34-.09.14-.05.27-.09.44-.05-.1.07-.18.12-.28.19.2.16.41.29.43.57-.04-.01-.06-.02-.08-.03-.35-.31-.75-.4-1.2-.27-.36.1-.72.23-1.08.35-.05.02-.08.09-.12.14v.01c-.04.1-.17.12-.34.04-.05-.02-.08-.12-.08-.19 0-.06.04-.13.08-.18.04-.04.11-.08.16-.06.11.03.14-.03.17-.12.08-.19.16-.37.27-.54.08-.12.21-.2.4-.21-.18.21-.38.39-.38.69.14-.04.25-.07.33-.21.15-.27.37-.49.7-.55.03 0 .05 0 .09.01-.19.15-.41.28-.48.55m-.79 1-.12.44c.02.01.04.02.06.04.04-.05.1-.1.13-.16.1-.25.2-.35.41-.36-.04.06-.08.11-.11.17-.03.06-.05.12-.08.18.01.01.02.02.03.04.06-.05.13-.09.19-.14.11-.12.22-.25.42-.25-.08.1-.14.18-.21.27 0 .01.01.02.02.03.13-.05.27-.09.4-.14 0 .01.01.02.02.04-.03.04-.06.08-.1.13.12.1.29.15.31.36-.56-.35-1.06-.11-1.56.13-.02.01-.06.03-.06.05-.04.18-.17.1-.27.08-.03 0-.08-.09-.07-.11.05-.07.02-.21.16-.2.1.01.12-.04.13-.12.02-.11.05-.23.11-.33.04-.07.11-.11.17-.17 0 .01.01.02.02.03m-2.25-3.95c-.18-.04-.35-.26-.36-.42 0-.14-.01-.28-.03-.42-.01-.12.02-.2.15-.22.07-.01.14-.04.2-.07-.08-.13-.15-.26-.22-.39-.05-.09-.12-.1-.17-.02-.09.14-.15.3-.22.45-.02.04 0 .11-.03.14-.03.03-.09.04-.13.07-.02-.04-.05-.08-.05-.12.06-.3.2-.57.4-.81.03-.03.12-.03.18-.01.09.03.18.09.27.13.02-.02.04-.03.04-.05.04-.24.21-.41.36-.59.03-.03.02-.1.02-.15l-.14.03-.15.03c-.01-.1-.25-.13-.08-.28l.21-.18c.06-.05.17-.07.14-.19v-.01c.1-.08.2-.15.3-.23.04.09.09.17.14.28 0-.2.04-.21.21-.15.08.03.17 0 .26 0v.11c.09 0 .17 0 .24-.01-.03.08-.05.15-.07.22.08.02.15.04.24.06-.04.05-.09.1-.14.16.09.04.16.07.26.12-.09.11-.17.2-.25.3.03.02.07.03.09.06.02.02.03.07.02.08-.08.06-.17.12-.25.18-.07.05-.14.09-.19.15-.01.02.03.12.07.14.19.06.39.11.59.16.16.04.32.09.48.14.05.01.1 0 .14 0v-.15c0-.03-.03-.05-.05-.07-.2-.14-.15-.35-.18-.54 0-.01 0-.03.01-.04.13-.11.19-.3.39-.32.11 0 .21-.03.24-.16 0-.03.06-.06.12-.11 0 .19.03.35-.15.41.07.09.16.16.18.26.02.09-.03.21-.05.34.05.1.16.23.04.4v.04c-.03.23-.11.27-.34.2-.06-.02-.12-.03-.19-.05.05.23 0 .42-.14.58-.11.12-.06.25.01.36.1.14.12.24-.04.37-.11.09-.17.23-.27.34-.07.09-.22.1-.23.26 0 .03-.11.06-.17.09-.05-.17 0-.3.12-.37.16-.1.27-.25.35-.42.02-.04 0-.13-.04-.16-.09-.07-.21-.12-.31-.17-.02.04-.04.05-.04.06.03.2-.1.27-.26.32-.06.02-.1.07-.16.1-.08.05-.17.09-.25.14-.03.02-.08.05-.09.08-.03.13-.11.14-.22.13-.03-.17.08-.31.28-.4.13-.06.25-.14.37-.23.1-.08.1-.19.02-.3 0-.01-.02-.02-.03-.03-.09-.22-.27-.27-.49-.32-.3-.08-.61-.09-.91-.13-.35-.05-.36-.04-.26.29.03.12.03.24.16.32.03.01 0 .11 0 .19m1.36-4.07c.07-.09.16-.16.28-.11.07.03.11.1.17.15-.01.02-.03.04-.04.05-.04-.02-.08-.03-.12-.06-.08-.07-.15-.04-.18.04-.02.06-.03.14-.01.2 0 .04.06.09.1.1.04 0 .08-.03.12-.05-.04-.06-.07-.09-.1-.13.06-.01.13-.03.2-.05v.32c-.07 0-.14.02-.2.03-.11.01-.2-.04-.22-.15-.02-.12 0-.24 0-.36Zm1.11.18c.07-.03.13-.04.17-.07.01 0 0-.07 0-.08a.71.71 0 0 0-.17-.04v.19Zm.03.08c-.08.07.05.23-.14.23v-.61h.26c.11.01.14.1.14.19 0 .13-.01.27-.02.41-.09.04-.1-.03-.1-.11 0-.1-.04-.14-.14-.12m-.23.25s-.07-.05-.09-.08c-.06-.09-.15-.09-.21 0-.02.03-.06.05-.09.08-.01 0-.02-.02-.04-.03.05-.18.1-.36.16-.54 0-.02.05-.06.07-.05.03 0 .07.03.08.06.06.17.1.35.15.53l-.03.03m-2.73-.41s-.07-.04-.1-.06a.487.487 0 0 0-.11-.04c-.01 0-.04.04-.04.05.02.03.05.05.08.07.02.01.03.02.05.03.1.04.17.1.14.22-.03.1-.09.14-.19.14-.12 0-.19-.06-.2-.21.05.02.08.03.12.05.05.02.09.04.14.05l.04-.05a.444.444 0 0 0-.18-.11c-.09-.05-.12-.12-.09-.22.03-.11.12-.13.22-.12.1.02.15.08.13.21m.62-.2v.35c0 .07 0 .16.1.13.04 0 .07-.09.08-.14.01-.09 0-.17 0-.26 0-.03.04-.07.06-.1.01 0 .03.01.04.02v.45c0 .1-.07.15-.18.15-.1 0-.19-.03-.2-.14-.01-.13-.01-.27-.01-.41 0-.03.04-.05.07-.07.01 0 .02.01.04.02m1.2.1s-.09 0-.14.01c-.01.16-.03.32-.05.48h-.08v-.46c-.05-.05-.2.01-.13-.15h.28c.09 0 .11.04.1.12m1.59.01h-.09c-.02-.01-.04-.04-.06-.06.02-.02.05-.05.07-.05h.32c0 .01.02.03.03.04-.04.03-.08.07-.16.13v.44c-.17-.03-.09-.15-.1-.22-.01-.08 0-.17 0-.27m-2.29.48v-.48s-.08 0-.1-.02c-.02 0-.04-.04-.04-.06 0-.02.03-.05.05-.05h.29c.02 0 .05.03.05.05 0 .02-.02.05-.04.06-.02.01-.05 0-.08.01-.01.16-.02.32-.04.47h-.08m-.79-.48c-.01.16-.03.32-.04.48h-.08v-.47s-.06 0-.08-.01c-.02-.01-.04-.04-.07-.06.02-.02.04-.06.06-.06h.26c.02 0 .05.03.07.05-.02.02-.04.05-.06.06-.02.01-.04 0-.07.01m.62-4.44v-.26h1.1c.05 0 .09-.06.14-.08-.05-.03-.09-.08-.14-.08h-.8c-.23 0-.33-.11-.34-.35 0-.24.1-.35.34-.35h1.23v.25h-1.1c-.07 0-.15 0-.14.1 0 .04.09.08.14.08h.8c.13 0 .25.01.31.15.06.15.07.32-.04.46a.25.25 0 0 1-.18.08h-1.33M9.76 4.4v.19c.29-.02.57-.03.84-.05.04 0 .07-.06.1-.09-.04-.03-.08-.08-.11-.08-.27 0-.55.03-.84.04m-.28-.24c.15 0 .3-.02.45-.03.25-.02.5-.04.76-.05.31 0 .44.18.34.48-.01.05 0 .11 0 .16.03.15.06.3.09.47-.12 0-.21.01-.3.01 0-.02-.02-.03-.02-.04-.03-.37-.07-.4-.44-.37-.1 0-.19.01-.29.02-.09 0-.18.01-.29.02v.45h-.32V4.17m-.46.68v-.09c0-.23-.05-.26-.28-.21l-.34.06c-.45.08-.43 0-.41.52v.01c0 .11.05.15.16.13l.59-.09c.28-.04.29-.05.28-.33m-1.33.12v-.23c0-.2.06-.28.27-.32l.89-.15c.32-.05.45.07.46.39v.42c0 .17-.06.26-.21.29-.35.07-.71.13-1.07.17-.2.03-.33-.1-.33-.31v-.26h-.01Zm9.15.28c0 .08 0 .14-.01.22.26.06.51.11.77.17h.04q.22.04.17.28c-.42-.09-.83-.18-1.27-.27.02-.38.04-.76.07-1.16.44.09.87.18 1.31.28 0 .08 0 .15-.02.24-.34-.07-.67-.14-1.02-.21V5c.33.07.66.14 1.01.22 0 .08-.01.15-.02.24l-1.01-.21M6.3 5.22c.26-.06.52-.11.77-.17.04-.01.07-.08.1-.12-.04-.02-.09-.06-.13-.05-.22.04-.43.1-.65.14-.13.02-.13.09-.09.2m-.33-.36c.4-.09.78-.18 1.17-.26.21-.04.33.02.36.19.06.26-.02.43-.23.49-.28.07-.57.13-.85.19-.09.02-.11.05-.1.14l.03.33c-.09.02-.17.05-.29.08l-.09-1.15m8.59.2c0 .1-.01.17-.02.26-.31-.02-.62-.05-.92-.07-.09 0-.17-.01-.26-.02-.18-.02-.29-.12-.29-.3 0-.2.01-.41.04-.61.02-.16.1-.23.27-.22.41.02.81.06 1.22.09v.26c-.33-.03-.64-.05-.95-.08-.2-.02-.24.01-.26.21-.03.36 0 .39.35.42l.83.06m1.48-.21c0-.15.02-.29.03-.44.09.01.18.03.27.04-.02.39-.05.77-.07 1.16-.1-.02-.18-.03-.28-.05 0-.16.02-.31.03-.47-.31-.06-.61-.12-.93-.18-.01.16-.03.32-.04.49-.09-.01-.18-.02-.27-.04.02-.39.05-.77.07-1.17.09.01.17.02.28.04 0 .14-.01.28-.02.43.31.06.61.12.94.18" fill="currentColor"></path></svg>,
        increase: true
    },
    {
        id: 6,
        title: 'لکسوس',
        price: '34,800,000',
        increase: false,
        logoSvg: <svg data-v-1d57be6d="" data-v-ca4101d8="" viewBox="0 0 24 24" class="stepped-selection__list-item-brand-icon"><path d="M15.69 6.06c-.07.1-.13.18-.2.27-.15.21-.3.42-.45.62l-.39.54-.39.54c-.12.16-.23.32-.35.48-.25.35-.51.7-.76 1.06l-.53.74c-.17.23-.33.46-.5.69-.21.3-.43.59-.64.88-.2.28-.4.57-.61.85-.09.11-.13.24-.16.37-.03.14-.06.27-.05.41 0 .14.06.25.19.31.08.04.17.04.26.04h8.14c.03 0 .05 0 .06-.04.06-.17.12-.33.17-.5.04-.12.07-.23.09-.35.03-.12.05-.24.07-.37.02-.13.04-.25.05-.38v-.51c0-.14-.02-.29-.04-.43-.03-.16-.06-.31-.11-.47-.05-.17-.12-.33-.18-.49a3.15 3.15 0 0 0-.13-.26c-.13-.22-.26-.45-.4-.67-.12-.18-.25-.35-.39-.52-.21-.27-.45-.51-.72-.73-.18-.15-.37-.3-.56-.43-.34-.23-.7-.42-1.08-.56-.1-.04-.2-.06-.29-.09 0 0-.01 0-.03-.01l.59-.77c.08.03.15.06.22.1.22.11.45.21.66.32.22.12.44.25.65.38.3.18.58.38.85.6.2.16.4.34.59.52.24.23.46.48.66.75.11.16.22.33.31.5.09.16.16.33.23.51.08.2.15.41.21.61.05.14.08.29.11.44.04.19.07.38.1.57.03.23.03.46.03.69 0 .11 0 .22-.01.33-.01.13-.03.27-.06.4l-.12.53c-.03.12-.08.24-.13.35-.1.26-.23.5-.38.73-.13.2-.26.39-.42.56-.08.08-.16.17-.25.25-.01.01-.04.02-.06.02H9.15a1.2 1.2 0 0 1-.53-.11c-.23-.1-.43-.24-.58-.45-.08-.11-.13-.24-.17-.37-.03-.13-.07-.26-.1-.4-.04-.21-.05-.43-.04-.64.01-.22.07-.44.16-.64.05-.11.09-.22.16-.31.11-.16.23-.32.34-.48.11-.16.22-.31.33-.47.13-.19.26-.37.39-.56.14-.19.27-.39.41-.58l.64-.91c.08-.11.16-.23.24-.34l.31-.43c.22-.31.43-.62.65-.93.18-.25.36-.5.53-.76.15-.22.3-.43.45-.65 0 0 0-.02.02-.03-.05 0-.09-.01-.14-.01h-.68c-.17 0-.34.02-.5.03-.11 0-.22.01-.33.03-.1.01-.21.03-.31.04l-.37.06c-.12.02-.25.05-.37.08-.24.06-.48.12-.71.18-.13.04-.27.08-.4.13-.19.07-.38.15-.56.23-.33.15-.65.32-.95.52-.24.16-.46.33-.67.52-.22.2-.42.41-.6.64-.15.19-.3.38-.44.58-.17.23-.32.48-.46.74-.13.26-.25.52-.33.8-.05.18-.09.37-.13.56-.03.19-.05.38-.04.57 0 .15.03.3.05.45l.06.37c.03.14.07.28.11.42.08.27.19.52.31.78.11.23.23.45.38.66.14.2.29.39.45.58.12.15.27.28.41.41.21.2.45.39.69.55.16.11.32.21.48.3.18.1.37.2.56.29.25.12.5.22.77.3.14.04.28.09.42.13.1.03.2.05.3.08.14.04.28.07.42.11.12.03.25.05.37.08.15.03.3.06.46.08.1.02.2.03.31.04.12.02.24.03.35.04l.31.03.82.03c.16 0 .31-.01.47-.02.13 0 .26-.02.39-.03.12-.01.25-.03.37-.05.19-.03.39-.06.58-.1.11-.02.23-.05.34-.08l.45-.12c.17-.05.34-.11.51-.18.23-.09.45-.18.67-.29.23-.12.46-.25.68-.38.27-.17.53-.36.77-.58.01-.01.03-.02.05-.02.48 0 .95 0 1.43-.01h.04v.01c-.05.05-.11.1-.16.15-.17.16-.35.3-.53.44-.22.17-.45.32-.69.46-.17.1-.34.2-.51.28-.21.11-.43.21-.65.3-.27.11-.54.21-.81.3-.21.07-.42.13-.63.19-.14.04-.28.07-.42.1-.16.03-.32.07-.48.1-.18.03-.37.07-.55.09-.15.02-.31.04-.46.05-.2.02-.41.03-.62.05-.33.03-.67.03-1 .02-.18 0-.37 0-.55-.01-.19 0-.38-.02-.57-.04-.2-.02-.41-.04-.61-.07l-.43-.06a6.21 6.21 0 0 1-.46-.1l-.58-.15c-.17-.05-.34-.11-.51-.17-.23-.09-.47-.18-.69-.28-.24-.11-.48-.23-.71-.37-.22-.13-.44-.27-.66-.41-.18-.12-.35-.25-.51-.38-.2-.16-.4-.33-.59-.51a7 7 0 0 1-.46-.48c-.22-.23-.42-.48-.6-.74-.11-.16-.22-.32-.29-.5-.09-.22-.17-.45-.24-.68-.05-.15-.08-.3-.12-.45-.03-.14-.05-.28-.07-.41-.05-.31-.06-.62-.04-.94 0-.18.03-.37.06-.55s.06-.36.11-.54c.06-.21.13-.41.21-.61.08-.22.19-.43.31-.63a5.416 5.416 0 0 1 1-1.24c.21-.2.44-.39.67-.57.24-.18.48-.35.74-.5.27-.16.54-.31.82-.46.23-.12.47-.23.71-.33s.48-.18.72-.26c.19-.06.38-.12.57-.17.27-.07.53-.13.8-.19.16-.03.32-.06.47-.09.2-.03.41-.06.62-.08.23-.02.46-.04.69-.05.32 0 .63-.01.95 0 .2 0 .4.01.59.03.17.01.33.03.5.05.2.02.4.05.59.09.21.04.42.08.62.13.3.07.6.16.89.27.01 0 .02.01.04.02" fill="currentColor"></path></svg>
    }
]

const articleDatas = [
    {
        id: 1,
        title: 'معرفی لاماری ایما ',
        subtitle: 'شرایط خرید و معرفی محصول',
        mainImg: './img/article-1.webp',
        createdAt: '1402/4/2'
    },
    {
        id: 2,
        title: 'معرفی لاماری ایما ',
        subtitle: 'شرایط خرید و معرفی محصول',
        mainImg: './img/article-2.webp',
        createdAt: '1402/4/2'
    },
    {
        id: 3,
        title: 'معرفی لاماری ایما ',
        subtitle: 'شرایط خرید و معرفی محصول',
        mainImg: './img/article-3.webp',
        createdAt: '1402/4/2'
    },
    {
        id: 4,
        title: 'معرفی لاماری ایما ',
        subtitle: 'شرایط خرید و معرفی محصول',
        mainImg: './img/article-4.webp',
        createdAt: '1402/4/2'
    },
    {
        id: 5,
        title: 'معرفی لاماری ایما ',
        subtitle: 'شرایط خرید و معرفی محصول',
        mainImg: './img/article-5.webp',
        createdAt: '1402/4/2'
    },
]

const bodyTypeDatas = [
    {
        id: 1,
        title: 'سدان'
    },
    {
        id: 2,
        title: 'شاسی بلند'
    },
    {
        id: 3,
        title: 'هاچبک'
    },
    {
        id: 4,
        title: 'وانت'
    },
    {
        id: 5,
        title: 'کوپه'
    },
    {
        id: 6,
        title: 'کروک'
    },
    {
        id: 7,
        title: 'ون'
    },
]

const colorDatas = [
    {
        id: 1,
        title: 'سفید',
        color: '#f1f5f9'
    },
    {
        id: 2,
        title: 'مشکی',
        color: '#020617'
    },
    {
        id: 3,
        title: 'خاکستری',
        color: '#334155'
    },
    {
        id: 4,
        title: 'نقره ای',
        color: '#6b7280'
    },
    {
        id: 5,
        title: 'قرمز',
        color: '#dc2626'
    },
    {
        id: 6,
        title: 'آبی',
        color: '#1d4ed8'
    },
]

const bodyCondition = [
    {
        id: 1,
        title: 'بدون رنگ',
    },
    {
        id: 2,
        title: 'یک لکه رنگ',
    },
    {
        id: 3,
        title: 'دور رنگ',
    },
    {
        id: 4,
        title: 'گلگیر رنگ',
    },
    {
        id: 5,
        title: 'صافکاری بدون رنگ',
    }
]

const postDatas = [
    {
        id: 1,
        title: 'بنز، کلاس E',
        date: 'لحظاتی پیش',
        model: '2012',
        km: '170,000',
        gear: 'اتوماتیک',
        seller: 'شخصی',
        address: 'تهران / سعادت آباد',
        price: '2,550,000,000',
        mainImg: './img/posts/post-1.webp',
        slideImg : [
            {
                src : './img/posts/post-1-slide-1.webp',
            },
            {
                src : './img/posts/post-1-slide-2.webp',
            },
            {
                src : './img/posts/post-1-slide-3.webp',
            },
        ]
    },
    {
        id: 2,
        title: '206 تیپ 2',
        date: 'لحظاتی پیش',
        model: '1398',
        km: '110,000',
        gear: 'دنده ای',
        seller: 'شخصی',
        address: 'تهران / آریا شهر ',
        price: '470,000,000',
        mainImg: './img/posts/post-2.webp',
        slideImg : [
            {
                src : './img/posts/post-2-slide-1.webp',
            },
            {
                src : './img/posts/post-2-slide-2.webp',
            },
            {
                src : './img/posts/post-2-slide-3.webp',
            },
        ]
    },
    {
        id: 3,
        title: 'پورش پانامرا',
        date: 'لحظاتی پیش',
        model: '2013',
        km: '78,000',
        gear: '4S',
        seller: 'نمایشگاه',
        address: 'تهران / میدان بهمن  ',
        price: '10,000,000,000',
        mainImg: './img/posts/post-3-slide-4.webp',
        slideImg : [
            {
                src : './img/posts/post-3-slide-4.webp',
            },
            {
                src : './img/posts/post-3-slide-1.webp',
            },
            {
                src : './img/posts/post-3-slide-2.webp',
            },
            {
                src : './img/posts/post-3-slide-3.webp',
            },
        ]
    },
    {
        id: 4,
        title: ' 207 دنده ای ',
        date: 'لحظاتی پیش',
        model: '1400',
        km: '14,0000',
        gear: 'دنده ای',
        seller: 'شخصی',
        address: 'تهران / پیروزی  ',
        price: '600,000,000',
        mainImg: './img/posts/post-4.webp',
        slideImg : [
            {
                src : './img/posts/post-4-slide-1.webp',
            },
            {
                src : './img/posts/post-4-slide-2.webp',
            },
            {
                src : './img/posts/post-4-slide-3.webp',
            },
        ]
    },
    {
        id: 5,
        title: 'فونیکس، تیگو 7 پرو ',
        date: 'لحظاتی پیش',
        model: '1402',
        km: 'صفر کیلومتر',
        gear: 'پریمیوم',
        seller: 'نمایشگاه',
        address: 'تهران / خیابان رجایی  ',
        price: '1,900,000,000',
        mainImg: './img/posts/post-5.webp'
    },
    {
        id: 6,
        title: 'لاماری، ایما',
        date: 'لحظاتی پیش',
        model: '1402',
        km: 'صفر کیلومتر',
        gear: 'پریمیوم',
        seller: 'شخصی',
        address: 'تهران / شهید مطهری  ',
        price: '2,000,000,000',
        mainImg: './img/posts/post-6.webp'
    },
    {
        id: 7,
        title: 'کی ام سی، T8',
        date: 'لحظاتی پیش',
        model: '1402',
        km: 'صفر کیلومتر',
        gear: 'دنده ای',
        seller: 'نمایشگاه',
        address: 'تهران / شهید مطهری  ',
        price: '2,200,000,000',
        mainImg: './img/posts/post-7.webp'
    },
    {
        id: 8,
        title: 'مازراتی، کواتروپورته',
        date: 'لحظاتی پیش',
        model: '2010',
        km: '90,000 km',
        gear: 'GTS',
        seller: 'نمایشگاه',
        address: 'تهران / جردن   ',
        price: 'توافقی',
        mainImg: './img/posts/post-8.webp'
    },
    {
        id: 9,
        title: 'لوتوس، الیزه',
        date: 'لحظاتی پیش',
        model: '2015',
        km: '10,000 km',
        gear: 'S',
        seller: 'نمایشگاه',
        address: 'تهران / جردن   ',
        price: 'توافقی',
        mainImg: './img/posts/post-9.webp'
    },
    {
        id: 10,
        title: 'هیوندای، النترا ',
        date: 'لحظاتی پیش',
        model: '2018',
        km: '24,000 km',
        gear: '2.2 لیتر',
        seller: 'شخصی',
        address: 'تهران / آریا شهر   ',
        price: '2,500,000,000',
        mainImg: './img/posts/post-10.webp'
    },
]

const cityDatas = [
    {
        id: 1,
        title: 'تهران'
    },
    {
        id: 2,
        title: 'خراسان رضوی'
    },
    {
        id: 3,
        title: 'اصفهان'
    },
    {
        id: 4,
        title: 'البرز'
    },
    {
        id: 5,
        title: 'فارس'
    },
    {
        id: 6,
        title: 'آذربایجان شرقی'
    },
    {
        id: 7,
        title: 'خوزستان'
    },
    {
        id: 8,
        title: 'گیلان'
    },
    {
        id: 9,
        title: 'هرمزگان'
    },
    {
        id: 10,
        title: 'همدان'
    },
]

export { SliderData, populaModelDatas, brandDatas, articleDatas, bodyTypeDatas, colorDatas, bodyCondition, postDatas, cityDatas }
