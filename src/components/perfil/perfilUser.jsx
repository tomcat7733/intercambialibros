<>
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-2">
        {/* SIDE NAV */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active text-body-secondary py-1" aria-current="page" href="#">
              Mis datos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Mensajes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Opiniones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Mis libros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Transacciones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Lista de deseados
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Sistema de reporte
            </a>
          </li>
        </ul>
      </div>
      <div className="col-1" />
      <div className="col-2">
        <h2 className="mb-4 ps-5">Perfil</h2>
        <img src="../../public/assets/img/icono_masculino_perfil.png" style={{ width: '12rem' }} />
      </div>
      <div className="col-2 mt-5 ps-5">
        <p>
          <strong>Nombre</strong>
        </p>
        <p>
          <strong>Apellidos</strong>
        </p>
        <p>
          <strong>Edad</strong>
        </p>
        <p>
          <strong>Localizacion</strong>
        </p>
        <p>
          <strong>Generos Preferidos</strong>
        </p>
      </div>
      <div className="col-2 mt-5">
        <p className="text-secondary">Antonio</p>
        <p className="text-secondary">Perez García</p>
        <p className="text-secondary">32</p>
        <p className="text-secondary">Sevilla</p>
        <p className="text-secondary">Terror, Ciencia</p>
      </div>
    </div>
  </div>
  {/* Comentarios */}
  <div className="container-fluid position-relative">
    <h4 className="border-bottom m-4 px-5 pb-2">OPINIONES</h4>
    <div className="carousel-inner position-relative mb-4">
      {/* Primera diapositiva con tarjetas */}
      <div className="carousel-item active mb-4">
        <div className="row justify-content-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-0">
            {/* Tarjeta 1 */}
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-3">"Excelente Iniciativa"</h6>
                  <div className="d-flex align-items-center">
                    <img
                      src="../../public/assets/img/icono_masculino2.png"
                      className="rounded-circle me-3"
                      alt="Imagen de usuario"
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                    <div>
                      <p className="mb-0 fw-medium">Saul</p>
                      <p className="mb-0 text-muted small">Happy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tarjeta 2 */}
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-3">"Muy Buen Servicio"</h6>
                  <div className="d-flex align-items-center">
                    <img
                      src="../../public/assets/img/imagen_femenino2.avif"
                      className="rounded-circle me-3"
                      alt="Imagen de usuario"
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                    <div>
                      <p className="mb-0 fw-medium">Ana</p>
                      <p className="mb-0 text-muted small">Satisfied</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tarjeta 3 */}
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-3">"Increíble Experiencia"</h6>
                  <div className="d-flex align-items-center">
                    <img
                      src="../../public/assets/img/icono_masculino.png"
                      className="rounded-circle me-3"
                      alt="Imagen de usuario"
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                    <div>
                      <p className="mb-0 fw-medium">Carlos</p>
                      <p className="mb-0 text-muted small">Excited</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tarjeta 4 */}
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-3">"Recomendado 100%"</h6>
                  <div className="d-flex align-items-center">
                    <img
                      src="../../public/assets/img/imagen_femenino.jpg"
                      className="rounded-circle me-3"
                      alt="Imagen de usuario"
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                    <div>
                      <p className="mb-0 fw-medium">Laura</p>
                      <p className="mb-0 text-muted small">Impressed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Segunda diapositiva */}
      <div className="row justify-content-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-0">
          {/* Tarjeta 1 */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title fw-bold mb-3">"Excelente Iniciativa"</h6>
                <div className="d-flex align-items-center">
                  <img
                    src="../../public/assets/img/icono_masculino.png"
                    className="rounded-circle me-3"
                    alt="Imagen de usuario"
                    style={{ width: 50, height: 50, objectFit: 'cover' }}
                  />
                  <div>
                    <p className="mb-0 fw-medium">Saul</p>
                    <p className="mb-0 text-muted small">Happy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title fw-bold mb-3">"Muy Buen Servicio"</h6>
                <div className="d-flex align-items-center">
                  <img
                    src="../../public/assets/img/imagen_femenino.jpg"
                    className="rounded-circle me-3"
                    alt="Imagen de usuario"
                    style={{ width: 50, height: 50, objectFit: 'cover' }}
                  />
                  <div>
                    <p className="mb-0 fw-medium">Ana</p>
                    <p className="mb-0 text-muted small">Satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title fw-bold mb-3">"Increíble Experiencia"</h6>
                <div className="d-flex align-items-center">
                  <img
                    src="../../public/assets/img/icono_masculino2.png"
                    className="rounded-circle me-3"
                    alt="Imagen de usuario"
                    style={{ width: 50, height: 50, objectFit: 'cover' }}
                  />
                  <div>
                    <p className="mb-0 fw-medium">Carlos</p>
                    <p className="mb-0 text-muted small">Excited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tarjeta 4 */}
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title fw-bold mb-3">"Recomendado 100%"</h6>
                <div className="d-flex align-items-center">
                  <img
                    src="../../public/assets/img/imagen_femenino2.avif"
                    className="rounded-circle me-3"
                    alt="Imagen de usuario"
                    style={{ width: 50, height: 50, objectFit: 'cover' }}
                  />
                  <div>
                    <p className="mb-0 fw-medium">Laura</p>
                    <p className="mb-0 text-muted small">Impressed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>;
