# sergiogcdev.github.io — Roadmap

> Actualizado: 2026-09-21. La web existente está publicada. El bloque comercial descrito abajo está implementado en local, pendiente de revisión de Sergio y publicación. No confundir cambios locales con producción.

## Qué es

Web principal de la marca **sergiogc.dev**: servicios profesionales, portfolio de productos propios, trayectoria y contacto. GitHub Pages detrás de Cloudflare, con dominio propio.

- **Apple es la especialidad principal** y debe conservar el protagonismo en portada, navegación y servicios. iPhone, iPad y Mac se acuerdan por proyecto, no se incluyen todos automáticamente.
- La oferta de páginas web para empresas es complementaria, con página propia orientada a Málaga y posibilidad de trabajo remoto.
- No convertir la marca en una agencia generalista ni iniciar otros proyectos mientras se cierra esta oferta.

## Base publicada antes de este bloque

- Portada, servicios de desarrollo iOS, portfolio, CV, privacidad y términos.
- Contenido HTML estático, sitemap, robots, canónicas, metadatos sociales y datos estructurados.
- Selector de idioma en portada y páginas legales; temas claro/oscuro en las páginas que lo incorporan.

## Implementado en local — bloque comercial Apple + web (2026-09-21)

- [x] Portada centrada en Apple; bloque web secundario y navegación diferenciada.
- [x] Página `/diseno-web-malaga/`: alcance, contenidos, costes separados, ejemplos propios, proceso, preguntas y contacto por correo.
- [x] Landing base delimitada: un idioma, hasta seis secciones y dos rondas de revisión. Aplicaciones web, tiendas y áreas privadas fuera del alcance base.
- [x] Textos finales del cliente con ajustes menores; adaptación desde base completa +20 % y redacción desde notas +30 %, sobre la landing base sin impuestos ni costes externos. Volumen y revisiones por escrito.
- [x] Sin precio base publicado hasta validarlo. Dominio, alojamiento y mantenimiento separados.
- [x] Servicios Apple con plataformas/funciones acordadas, costes externos separados y aprobación final de App Store dependiente de Apple.
- [x] Estados del portfolio aclarados; retirada la afirmación «3 apps publicadas» y la versión web no acreditada de SuppleMate.
- [x] Menú móvil nativo usable sin JavaScript en portada y servicios; cierre con Escape, enlaces y clic exterior como mejora con JS.
- [x] Eliminada la espera artificial de navegación en portada. Contenido visible sin JavaScript.
- [x] Títulos, descripciones, enlaces internos, canónicas, sitemap y datos estructurados para la página nueva.
- [x] Ajustes factuales de privacidad/términos en ES/EN para distinguir servicios profesionales y productos. **No equivalen a revisión jurídica.**

## Siguiente fase: revisar y publicar

- [ ] Validación de Sergio del contenido, estados de producto y alcance comercial. Revisar particularmente cualquier capacidad o estado que haya cambiado desde esta sesión.
- [ ] Validar textos legales con asesoría de privacidad: correo/precontratación, proveedores, bases jurídicas, conservación, transferencias y políticas separadas de cada producto. No afirmar cumplimiento completo por estos ajustes.
- [ ] Aprobar commit/push y publicación. No se ha publicado este bloque ni contactado a posibles clientes.
- [ ] Revisar URLs publicadas, sitemap y canónicas tras el despliegue.
- [ ] Consultar Search Console (acceso de lectura o exportación): indexación real, consultas, páginas y clics. No inferir posicionamiento de la mera existencia de metadatos.
- [ ] Medir rendimiento y accesibilidad con herramientas apropiadas. La consulta pública de PageSpeed durante la auditoría falló por cuota; no hay puntuación verificable.

## Prototipo local de portada por tarjetas (2026-09-22)

### Optimización local revisada

Revisión local 2026-09-23: footer compartido incorporado, titulares en peso 400
y controles en 500. Los CTA de servicios llevan a la tarjeta de contacto;
el alcance Apple/Web se consulta con desplegables en sus propias tarjetas.
Los enlaces externos de productos y los documentos legales conservan su destino.
Los pesos indicados abajo corresponden a la medición anterior a esta revisión.
Primera tarjeta: retirado el retrato; titular ES/EN abreviado a dos líneas
con interlineado 1.18 y tamaño adaptado al ancho de su tarjeta.
Privacidad y términos disponen de copias locales en `/preview/privacy/` y
`/preview/terms/`, noindex y fuera del sitemap, con tarjetas de altura natural.
El footer del preview conserva idioma y enlaza estas copias. Contenido legal
copiado íntegramente; regenerable con `node scripts/build-preview-legal.cjs`.

Se consumen dos fondos únicos, compartiendo la misma URL entre presentación y
Web. Originales PNG conservados; no se solicitan desde el HTML ni el CSS.

| Recurso | Escritorio (bytes) | Móvil (bytes) |
| --- | ---: | ---: |
| Escritorio MacBook | 55.320 | 15.312 |
| Ecosistema Apple | 60.466 | 17.744 |
| Total fondos únicos | 115.786 | 33.056 |

Retrato de 208 px: 6.362 bytes. Iconos WebP de 144 px con lazy nativo:
SuppleMate 2.622, RumFlow 2.112, FitMate 1.776 bytes. Sin iconos ocultos duplicados.
HTML + tres CSS + JS: 28.410 bytes. Total de archivos usados al recorrer todo
el preview: 157.068 bytes escritorio / 74.338 bytes móvil (sin cabeceras HTTP,
compresión de transporte ni ahorro de caché; no son una medición Lighthouse).

Verificado en navegador: inicialmente solo el fondo hero tiene currentSrc;
Apple se activa al entrar en su tarjeta; Web utiliza exactamente la URL del
hero. En móvil se seleccionan las variantes de 720 px. Solo hero tiene prioridad
alta. Las imágenes secundarias se activan con IntersectionObserver, sin preload.

- [x] Preview aislado en `/preview/`, excluido de `sitemap.xml` y con `noindex, nofollow`.
- [x] Cinco tarjetas con scroll nativo y superposición progresiva: presentación, Apple, web, proyectos y contacto.
- [x] Contenido bilingüe en el preview; Apple mantiene mayor protagonismo que la oferta web.
- [x] Material propio reutilizado: retrato de Sergio e iconos reales de productos. No se han usado imágenes, textos ni datos comerciales de Casa Caoba.
- [x] Primera tarjeta recta en sus bordes exteriores; las tarjetas posteriores y el retrato mantienen su redondeado.
- [x] Tres fondos generados integrados como decoración en `/preview/`; originales y procedencia en `preview/generated-backgrounds/PROMPTS.md`. Copias WebP de 1600 px: 54 KB, 59 KB y 33 KB aproximadamente. Superficies claras bajo el texto para contraste; retrato y portfolio propios conservados. Solo local.
- [x] Revisión visual de fondos en escritorio y móvil ES/EN; anclas Apple/Web operativas. Paneles altos recalculan su offset al cambiar idioma o desplegar contenido, sin scroll interno. En móvil y reduced motion pasan al flujo normal.
- [ ] Revisión de Sergio en local antes de considerar una sustitución de la portada. No publicar, redirigir ni borrar rutas existentes sin una nueva autorización.
- [ ] Decidir calendario real: proveedor, disponibilidad, videollamada, datos tratados y condiciones. No hay agenda simulada ni conexión externa en el preview.

## Pendiente, fuera de este bloque

- Formulario propio: decidir receptor, protección contra abuso, tratamiento de datos y política antes de conectarlo. Ahora se ofrece un correo con guía y dirección alternativa visible; no se simula un envío.
- Internacionalización indexable: URLs ES/EN independientes y `hreflang` recíproco si se prioriza captación en inglés. El selector actual no lo sustituye; las páginas de servicio están en español y se indica desde la versión inglesa.
- Casos de estudio con capturas, alcance y resultados comprobables. No inventar clientes, reseñas, métricas ni posiciones en buscadores.
- Captación local: escoger un sector y una pequeña lista de negocios. Referencias y conversaciones con permiso antes del correo comercial; un email público no equivale a autorización (LSSI, art. 21).
- Plan de contenido/blog y otros productos, solo después de cerrar la oferta y el circuito de consulta.

## Decisiones de arquitectura

- HTML/CSS/JavaScript sin framework ni build. Mantener contenido indexable en el HTML inicial; no migrar el stack para este bloque.
- `styles/home.css` es la base de portada y servicios; `styles/services.css` contiene componentes de las páginas de servicio. `scripts/site.js` mejora controles nativos; no es necesario para leer el contenido o abrir el menú móvil.
- Conservar `/desarrollo-apps-ios/` para no romper la URL existente al ampliar el mensaje a Apple.
- No se añade analítica, almacenamiento de consultas, cookies nuevas ni servicios de pago.
- Graphify: inventario de 36 archivos, ~27.547 palabras; no existía grafo y el detector indicó que no era necesario generarlo para esta revisión acotada. Se revisaron directamente los puntos de entrada y estilos compartidos.
- Referencias: [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines), [Google: versiones localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions), [LSSI, art. 21](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758#a21).
