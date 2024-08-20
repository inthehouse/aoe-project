const mockAxios = {
    create: jest.fn(() => mockAxios),
    get: jest.fn(() => Promise.resolve({ data: [] })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    interceptors: {
        response: {
            use: jest.fn(),
        },
    },
};

export default mockAxios;
