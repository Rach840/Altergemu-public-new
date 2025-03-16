import { z } from "zod";

export const sendSchema = z.object({
	firstName: z.string().min(3, {
		message: "Имя должно содержать минимум 3 символа",
	}),
	lastName: z.string().min(3, {
		message: "Фамилия должна содержать минимум 3 символа",
	}),

	discord: z.string().refine((str) => /[@]+/.test(str), {
		message: "Введите корректный никнейм",
	}),
	telegram: z.string().refine((str) => /[@]+/.test(str), {
		message: "Введите корректный никнейм",
	}),
	github: z.string().refine((str) => /[@]+/.test(str), {
		message: "Введите корректный никнейм",
	}),

	about: z.string().min(1, {
		message: "Напишите что нибудь о себе",
	}),
});
