import { get, post, put, del } from './comms';

describe('comms service', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    global.fetch = originalFetch;
  });

  const mockSuccess = (data: any = {}) => {
    (global.fetch as vi.Mock).mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(data),
    });
  };

  const mockFailure = (message = 'Failed', status = 400) => {
    (global.fetch as vi.Mock).mockResolvedValue({
      ok: false,
      status,
      statusText: message,
      text: async () => JSON.stringify({ message }),
    });
  };

  it('handles GET success', async () => {
    mockSuccess({ success: true });
    const res = await get('/test');
    expect(res.data).toEqual({ success: true });
  });

  it('handles POST success', async () => {
    mockSuccess({ id: 1 });
    const res = await post('/create', { name: 'test' });
    expect(res.data).toEqual({ id: 1 });
  });

  it('handles PUT success', async () => {
    mockSuccess({ updated: true });
    const res = await put('/update', { id: 1 });
    expect(res.data).toEqual({ updated: true });
  });

  it('handles DELETE success', async () => {
    mockSuccess({ deleted: true });
    const res = await del('/delete');
    expect(res.data).toEqual({ deleted: true });
  });

  it('handles fetch error response', async () => {
    mockFailure('Unauthorized', 401);
    await expect(get('/unauthorized')).rejects.toMatchObject({
      message: 'Unauthorized',
      response: {
        status: 401,
        data: { message: 'Unauthorized' },
      },
    });
  });

  it('parses invalid JSON gracefully', async () => {
    (global.fetch as vi.Mock).mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => 'plain text',
    });

    const res = await get('/text-response');
    expect(res.data).toBe('plain text');
  });
});
