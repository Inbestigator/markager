import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const bookmarkRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.array(
        z.object({ title: z.string(), url: z.string(), index: z.number() }),
      ),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.bookmark.createMany({
        data: input.map((bookmark) => ({
          title: bookmark.title,
          url: bookmark.url,
          ownerId: ctx.session.user.id,
          index: bookmark.index,
        })),
      });
    }),

  delete: protectedProcedure
    .input(z.array(z.string()))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.bookmark.deleteMany({
        where: {
          id: {
            in: input,
          },
          ownerId: ctx.session.user.id,
        },
      });
    }),

  getMarks: protectedProcedure.query(async ({ ctx }) => {
    const marks = await ctx.db.bookmark.findMany({
      orderBy: { index: "asc" },
      where: { owner: { id: ctx.session.user.id } },
    });

    return marks;
  }),
});
