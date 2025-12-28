import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Snowflake, Warning, Thermometer, FirstAid, Bed, MapPin, RoadHorizon, ArrowSquareOut } from '@phosphor-icons/react';
import { accommodations, safetyNotes, roadConditionSites } from '@/lib/itinerary-data';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export function SidebarInfo() {
  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5";
    switch (iconName) {
      case 'Snowflake':
        return <Snowflake className={iconClass} weight="duotone" />;
      case 'Warning':
        return <Warning className={iconClass} weight="duotone" />;
      case 'ThermometerCold':
        return <Thermometer className={iconClass} weight="duotone" />;
      case 'FirstAid':
        return <FirstAid className={iconClass} weight="duotone" />;
      default:
        return <Snowflake className={iconClass} weight="duotone" />;
    }
  };

  return (
    <div className="lg:sticky lg:top-24 space-y-6 relative z-20">
      <Tabs defaultValue="accommodation" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="accommodation" className="text-xs sm:text-sm">
            <Bed className="w-4 h-4 mr-1" />
            住宿
          </TabsTrigger>
          <TabsTrigger value="safety" className="text-xs sm:text-sm">
            <Warning className="w-4 h-4 mr-1" />
            注意
          </TabsTrigger>
          <TabsTrigger value="roads" className="text-xs sm:text-sm">
            <RoadHorizon className="w-4 h-4 mr-1" />
            路況
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accommodation" className="space-y-4 mt-4">
          {accommodations.map((acc, idx) => (
            <Card key={idx} className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" weight="duotone" />
                  <h3 className="font-semibold text-sm">Day {acc.day} - {acc.location}</h3>
                </div>
                <Badge variant={acc.status === 'confirmed' ? 'default' : 'secondary'} className="text-xs">
                  {acc.status === 'confirmed' ? '已確認' : '候補中'}
                </Badge>
              </div>

              {acc.note ? (
                <p className="text-sm text-muted-foreground italic">{acc.note}</p>
              ) : (
                <div className="space-y-2">
                  {acc.options?.map((option, optIdx) => (
                    <div
                      key={optIdx}
                      className="text-sm p-2 bg-muted/30 rounded border border-border/50"
                    >
                      <div className="font-medium">{option.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{option.features}</div>
                      {option.tier && (
                        <Badge variant="outline" className="mt-1 text-xs">
                          {option.tier === 'luxury' ? '奢華' : option.tier === 'mid-range' ? '中檔' : '經濟'}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="safety" className="space-y-3 mt-4">
          {safetyNotes.map((note, idx) => (
            <Alert key={idx} className="border-accent/30 bg-accent/5">
              <div className="text-accent">
                {getIcon(note.icon)}
              </div>
              <AlertTitle className="text-sm font-semibold mb-1">{note.title}</AlertTitle>
              <AlertDescription className="text-xs text-muted-foreground">
                {note.content}
              </AlertDescription>
            </Alert>
          ))}
        </TabsContent>

        <TabsContent value="roads" className="space-y-3 mt-4">
          <Card className="p-4 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <RoadHorizon className="w-5 h-5 text-primary" weight="duotone" />
              <h3 className="font-semibold text-sm">冬季路況查詢網站</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              出發前務必查看以下網站，確保行車安全。建議加入書籤以便隨時查詢。
            </p>
          </Card>

          {roadConditionSites.map((site, idx) => (
            <Card key={idx} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">{site.name}</h4>
                  <Badge variant="outline" className="text-xs mb-2">
                    {site.coverage}
                  </Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {site.description}
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="sm"
                className="w-full mt-3"
                variant="outline"
              >
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  前往網站
                  <ArrowSquareOut className="w-4 h-4" weight="bold" />
                </a>
              </Button>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
