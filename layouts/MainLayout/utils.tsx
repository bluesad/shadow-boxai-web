import MainLayout from './MainLayout';

type LayoutProps = Omit<ComponentProps<typeof MainLayout>, 'children'>;

export function getMainLayout(props?: LayoutProps) {
  return function getLayout(page: React.ReactElement) {
    return <MainLayout {...props}>{page}</MainLayout>;
  };
}
