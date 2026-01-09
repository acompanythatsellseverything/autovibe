export default function StrapiNotice() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-lg border-2 border-dashed border-yellow-400 bg-yellow-50 p-6">
        <h3 className="mb-2 text-lg font-semibold text-yellow-800">
          Strapi CMS no configurado
        </h3>
        <p className="mb-4 text-yellow-700">
          Para ver el contenido, por favor configura Strapi CMS:
        </p>
        <ol className="ml-6 list-decimal space-y-2 text-sm text-yellow-700">
          <li>Crea un archivo <code className="rounded bg-yellow-100 px-1 py-0.5">.env.local</code> en la raíz del proyecto</li>
          <li>Añade: <code className="rounded bg-yellow-100 px-1 py-0.5">NEXT_PUBLIC_STRAPI_URL=http://localhost:1337</code></li>
          <li>Opcional (para producción): <code className="rounded bg-yellow-100 px-1 py-0.5">STRAPI_API_TOKEN=tu_token</code></li>
          <li>Asegúrate de que Strapi esté ejecutándose</li>
          <li>Reinicia el servidor de desarrollo</li>
        </ol>
        <p className="mt-4 text-sm text-yellow-600">
          Ver <code className="rounded bg-yellow-100 px-1 py-0.5">SETUP.md</code> para instrucciones detalladas.
        </p>
      </div>
    </div>
  );
}

