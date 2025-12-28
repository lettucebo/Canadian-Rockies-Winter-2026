import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Snowflake, Warning, Thermometer, FirstAid, Bed, MapPin } from '@phosphor-icons/react';
import { accommodations, safetyNotes } from '@/lib/itinerary-data';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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
    <div className="lg:sticky lg:top-6 space-y-6">
      <Tabs defaultValue="accommodation" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="accommodation" className="text-xs sm:text-sm">
            <Bed className="w-4 h-4 mr-1" />
            住宿資訊
          </TabsTrigger>
          <TabsTrigger value="safety" className="text-xs sm:text-sm">
            <Warning className="w-4 h-4 mr-1" />
            注意事項
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
      </Tabs>
    </div>
  );
}
