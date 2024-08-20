declare module 'masonry-layout' {
    class Masonry {
        constructor(element: Element, options?: Masonry.Options);
        layout(): void;
        destroy(): void;
    }

    namespace Masonry {
        interface Options {
            itemSelector?: string;
            columnWidth?: string | number;
            percentPosition?: boolean;
        }
    }

    export = Masonry;
}
