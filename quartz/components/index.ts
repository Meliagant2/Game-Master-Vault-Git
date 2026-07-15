import NotFound from "./pages/404"
import Head from "./Head"
import Spacer from "./Spacer"
import DesktopOnly from "./DesktopOnly"
import MobileOnly from "./MobileOnly"
import Flex from "./Flex"
import ConditionalRender from "./ConditionalRender"

/* Neu hinzugefügt */
import MobileOnly from "./MobileOnly"
import RecentNotes from "./RecentNotes"
import Breadcrumbs from "./Breadcrumbs"
import Properties from "./Properties"

export {
  ArticleTitle,
  RecentNotes,
  NotFound,
  Breadcrumbs,
  Properties
}
/* Neu Ende */

export { componentRegistry, defineComponent } from "./registry"
export { External } from "./external"
export type { ComponentManifest, RegisteredComponent } from "./registry"
export type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export { Head, Spacer, DesktopOnly, MobileOnly, NotFound, Flex, ConditionalRender }
