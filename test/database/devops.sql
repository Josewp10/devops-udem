--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

-- Started on 2023-08-17 15:14:54 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4281 (class 0 OID 17198)
-- Dependencies: 212
-- Data for Name: Inventions; Type: TABLE DATA; Schema: public; Owner: -
--
DROP TABLE IF EXISTS public."Inventions";
DROP TABLE IF EXISTS public."Inventors";
--
-- TOC entry 4279 (class 0 OID 17189)
-- Dependencies: 210
-- Data for Name: Inventors; Type: TABLE DATA; Schema: public; Owner: -
--
CREATE TABLE IF NOT EXISTS public."Inventors"
(
    id SERIAL NOT NULL ,
    name character varying COLLATE pg_catalog."default",
    CONSTRAINT "Inventors_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;
ALTER TABLE IF EXISTS public."Inventors"
    OWNER to devops;

CREATE TABLE IF NOT EXISTS public."Inventions"
(
    id SERIAL NOT NULL ,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    year character varying COLLATE pg_catalog."default",
    description character varying COLLATE pg_catalog."default",
    inventor integer,
    CONSTRAINT "Inventions_pkey" PRIMARY KEY (id),
    CONSTRAINT fk_inventor FOREIGN KEY (inventor)
        REFERENCES public."Inventors" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Inventions"
    OWNER to devops;

INSERT INTO public."Inventors" (name) VALUES ('Thomas Edison');
INSERT INTO public."Inventors" (name) VALUES ('Nikola Tesla');
INSERT INTO public."Inventors" (name) VALUES ('Marie Curie');
/*
INSERT INTO public."Inventions" (id, name, year, description, inventor) VALUES (1 'Incandescent Light Bulb', "1879", "Edison''s light bulb revolutionized indoor lighting by providing a practical and efficient source of electric light", 1);
INSERT INTO public."Inventions" (id, name, year, description, inventor) VALUES (2, 'Phonograph', '1877', 'The phonograph was a device that could record and reproduce sound, pioneering the audio recording industry', 1);
INSERT INTO public."Inventions" (id, name, year, description, inventor) VALUES (3, 'Alternating Current (AC) System', '1880s', 'Tesla''s AC system transformed the way electricity is transmitted and distributed, making long-distance power transmission possible', 2);
INSERT INTO public."Inventions" (id, name, year, description, inventor) VALUES (4, 'Tesla Coil', '1891', 'The Tesla Coil is an electrical resonant transformer circuit used for generating high-voltage, low-current, high-frequency alternating-current electricity', 2);
INSERT INTO public."Inventions" (id, name, year, description, inventor) VALUES (5, 'X-ray Machine', '1896', 'Marie Curie''s work in X-rays included the development of portable X-ray machines for use in field hospitals during World War I', 3);
INSERT INTO public."Inventions" (id, name, year, description, inventor) VALUES (6, 'Radium and Polonium Isolation', '1898', 'Curie isolated and identified the radioactive elements radium and polonium, contributing to the understanding of radioactivity', 3);
*/

--
-- TOC entry 4290 (class 0 OID 0)
-- Dependencies: 211
-- Name: Inventions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--




--
-- TOC entry 4291 (class 0 OID 0)
-- Dependencies: 209
-- Name: Inventors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--



-- Completed on 2023-08-17 15:15:06 -05

--
-- PostgreSQL database dump complete
--

