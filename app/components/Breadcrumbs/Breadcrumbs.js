// components/Breadcrumbs.js
import Link from "next/link";
import { useRouter } from "next/navigation";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = (router.asPath || "")
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <div>
      {pathSegments.map((segment, index) => (
        <span key={segment}>
          <Link href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
            <a>{getBreadcrumbLabel(segment)}</a>
          </Link>
          {index < pathSegments.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
};

const getBreadcrumbLabel = (segment) => {
  return segment.charAt(0).toUpperCase() + segment.slice(1);
};

export default Breadcrumbs;
