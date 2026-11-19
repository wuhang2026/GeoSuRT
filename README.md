# GeoSuRT

**Surgeon-Centric Intraoperative Monitoring using Joint Graph-Guided Mesh
Recovery and Geometry-Assisted Tracking**

Hang Wu, Bolin Li, Yubin Miao, Xiaojun Chen

The project page presents SkeGLNet for surgeon mesh recovery and GeoTrack for
geometry-assisted online identity tracking.

- Project page: <https://wuhang2026.github.io/GeoSuRT/>
- Paper: link reserved; the PDF is not uploaded.
- Dataset and download links will be added later.

## Project page maintenance

The buildless website is in `docs/`. GitHub Pages should publish from the
`main` branch, `/docs` directory. No Node installation or build step is needed.
Preview it locally with `python -m http.server --directory docs 8080`.

The two videos come from Phase 2 and Phase 3 of the approved GeoSuRT_v20
video. Reconstruction examples follow the order 27, 20, 03, 05, 15, 28.
Tracking includes the accepted GeoTrack trajectories and a 220-pixel gap
between the lower panels. The full 2560 × 1440 canvas, 30 fps timing, and
final three-second tracking hold are retained. The tracking title omits
the parenthetical method name. The manuscript PDF is excluded from the
published files and Git history.

Update the resource links in `docs/index.html` when new materials are ready.
To activate a paper or dataset button, replace its disabled `button` with an
anchor to the provided URL and remove the `resource-pending` class and
disabled attributes. Author email addresses are intentionally omitted from
the page. PDF files are ignored until their publication is authorized.

Website attribution is in [THIRD_PARTY_NOTICES](docs/THIRD_PARTY_NOTICES.md).
