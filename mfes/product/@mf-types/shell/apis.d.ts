
    export type RemoteKeys = 'shell/Root';
    type PackageType<T> = T extends 'shell/Root' ? typeof import('shell/Root') :any;