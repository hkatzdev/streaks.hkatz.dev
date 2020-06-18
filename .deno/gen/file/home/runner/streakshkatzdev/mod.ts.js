import { serve } from "https://deno.land/std@0.57.0/http/server.ts";
const s = serve({ port: 8080 });
for await (const req of s) {
  req.respond({
    status: 302,
    headers: new Headers({
      "Location": "https://scrap.hkatz.dev",
    }),
  });
}
//# sourceMappingURL=file:///home/runner/streakshkatzdev/.deno/gen/file/home/runner/streakshkatzdev/mod.ts.js.map
